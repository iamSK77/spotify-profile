import React, { useEffect, useState } from "react";
import MusicBars from "../components/MusicBars";
import { Heading, Layout, TrackItem } from "../components/SharedComponents";

const TopTracks = ({ token, spotify }) => {
  const [tracks, setTracks] = useState(null);

  const getTracks = async () => {
    if (!token) return;
    spotify
      .getMyTopTracks({ limit: 50, time_range: "long_term" })
      .then((tracks) => setTracks(tracks));
  };

  useEffect(() => {
    const FetchUser = async () => {
      await getTracks();
    };
    FetchUser();
  }, [token]);

  console.log(tracks);
  return (
    <Layout>
      <Heading>Top Tracks</Heading>
      <div className="mt-50p">
        {tracks?.items?.length > 0 ? (
          <div>
            {tracks?.items?.map((track: any, i: React.Key) => (
              <TrackItem track={track} key={i} />
            ))}
          </div>
        ) : (
          <MusicBars />
        )}
      </div>
    </Layout>
  );
};

export default TopTracks;
