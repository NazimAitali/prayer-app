import React from "react";
import Card from "./Card";


function Prayer({ data, loading, err }) {
  return (
    <div className="prayer">
            
      {loading ? (
        <div className="pulse"></div>
      ) : (
        <>
          {err ? (
            <div className="err"></div>
          ) : (
            <>
              {data ? (
                <Card
                  city={data.settings.location.state}
                  Fajr={data.results.Fajr}
                  Dhuhr={data.results.Dhuhr}
                  Asr={data.results.Asr}
                  Maghrib={data.results.Maghrib}
                  Isha={data.results.Isha}
                />
              ) : (
                <div className="nodata"></div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Prayer;
