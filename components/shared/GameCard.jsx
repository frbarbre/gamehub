import Link from "next/link";
import { fetchGameData } from "../../lib/fetchGameData";
import { genres } from "../../constants";

export default async function GameCard({ game }) {
  const cover = await fetchGameData(
    "covers",
    `fields image_id; where id = ${game?.cover};`
  );

  const genre = genres.find((genre) => genre.genreId === game?.genres[0])?.name;

  function yearConverter(UNIX_rating) {
    var a = new Date(UNIX_rating * 1000);
    var year = a.getFullYear();
    return year;
  }

  const releaseYear = yearConverter(game?.first_release_date);

  const rating = game?.total_rating / 10;
  return (
    <>
      {cover && (
        <Link
          href={`/games/${game.slug}`}
          className="block bg w-max shadow-search shadow-black/25 rounded-b-[2px]"
        >
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${cover[0]?.image_id}.png`}
            alt={`${game?.name}-cover`}
            className="rounded-t-[2px] w-[160px] h-[214px] object-cover"
            loading="lazy"
          />
          <section className="flex flex-col justify-between px-[6px] py-[8px] gap-[3px]">
            <div className="flex justify-between items-center">
              <h3 className="w-[118px] truncate text-[12px] uppercase tracking-[0.72px] font-bold">
                {game?.name}
              </h3>
              <p className="text-[12px] uppercase tracking-[0.72px] font-bold">
                {releaseYear}
              </p>
            </div>
            <div className="text-right flex justify-between items-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.56px]">
                {genre}
              </p>
              <div className="flex gap-[2px] items-center">
                <p className="text-[12px] uppercase tracking-[0.72px] font-semibold">
                  {rating.toFixed(1)}
                </p>
                <img
                  src="/star-icon.png"
                  alt="star-icon"
                  className="w-[5.3px] object-contain aspect-square"
                />
              </div>
            </div>
          </section>
        </Link>
      )}
    </>
  );
}
