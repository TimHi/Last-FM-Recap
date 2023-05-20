import { useNavigate } from "react-router-dom";
import lastfmApi from "../api/data-service";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useMemo, useRef, useState } from "react";
import { Tag } from "../model/AlbumTopTags";
import { RadarData } from "../model/ChartData";
import RadarChartComponent from "../components/RadarChartComponent";

function GenresPage() {
    const navigate = useNavigate();
    const userName = useSelector((state: RootState) => state.user.name);

    const { data } = lastfmApi.useGetTopAlbumsForUserQuery(userName)
    const [getTags] = lastfmApi.useLazyGetTopTagsForAlbumQuery();

    const [genres, setGenres] = useState<Tag[]>([]);
    const [radarData, setRadarData] = useState<RadarData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (data?.topalbums.album) {
                const albumTags = await Promise.all(
                    data.topalbums.album.map(async (album) => {
                        const result = await getTags({
                            albumName: album.name,
                            artist: album.artist.name,
                        });

                        return result.data?.toptags.tag || [];
                    })
                );

                const tags = albumTags.flat();
                setGenres(tags);
                const rData = analyzeTags(tags);
                rData.sort((a, b) => b.occurence - a.occurence);

                setRadarData(rData.slice(0, 20));

            }
        };

        fetchData();
    }, [data, getTags]);

    function analyzeTags(strings: Tag[]): RadarData[] {
        // Count occurrences of each string
        const stringCountMap: { [key: string]: number } = {};
        let maxOccurrence = 0;

        for (const v of strings) {
            if (!stringCountMap[v.name]) {
                stringCountMap[v.name] = 1;
            } else {
                stringCountMap[v.name]++;
            }

            if (stringCountMap[v.name] > maxOccurrence) {
                maxOccurrence = stringCountMap[v.name];
            }
        }

        // Prepare the data structure
        const data: RadarData[] = [];

        for (const v in stringCountMap) {
            data.push({
                label: v,
                occurence: stringCountMap[v],
                maxOccurence: maxOccurrence,
            });
        }

        return data;
    }

    return (
        <div style={{ width: "700px", height: "700px" }}>
            <h1>Genres</h1>
            <div style={{ width: "100%", height: "100%" }}>
                <RadarChartComponent data={radarData} />
            </div>
            <button onClick={() => navigate("/tracks")}>Back</button>
            <button onClick={() => navigate("/artists")}>Next</button>
        </div>
    );
}

export default GenresPage;
