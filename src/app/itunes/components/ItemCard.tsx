import { type ITunesItem } from "@/app/itunes/api/itunes";

type ItemCardProps = {
    item: ITunesItem
};

export default function ItemCard({ item: { country, artistName, artworkUrl100 } }: ItemCardProps) {
    return (
        <div
            className="flex relative rounded-48 w-[250px] h-[250px] group border-solid opacity-85 hover:opacity-100 overflow-hidden bg-cover z-0"
            style={{ backgroundImage: `url(${artworkUrl100})`, backgroundSize: 'cover' }}
        >
            <div className="absolute bottom-0 h-[250px] w-full bg-gradient-to-t from-black to-transparent">
                <ul className="absolute bottom-20 left-20 text-white">
                    <li>{country}</li>
                    <li>{artistName}</li>
                    <li />
                </ul>
            </div>
        </div>
    );
}
