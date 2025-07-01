import type { ArchiveIndexVolume } from "../../../types/Api";

export function ArchiveIndexJsonUpdate(data: Record<string, Record<string, string[]>>) {
    const result: ArchiveIndexVolume[] = [];

    for (const year in data) {
        const volumes: { volume: string, issue: string[] }[] = Object.entries(data[year]).map(([volume, issues]) => (
            {
                volume: volume,
                issue: issues
            }));

        result.push({ year, volumes });
    }

    return result;
}
