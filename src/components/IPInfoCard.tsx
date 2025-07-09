interface Props {
  data: {
    ip: string;
    location: {
      city: string;
      region: string;
      country: string;
      timezone: string;
    };
    isp: string;
  } | null;
}

const IPInfoCard = ({ data }: Props) => {
  if (!data) return null;

  return (
    <div className="info-card">
      <div className="info">
        <h4>IP Address</h4>
        <p>{data.ip}</p>
      </div>
      <div className="info">
        <h4>Location</h4>
        <p>{data.location.city}, {data.location.region}, {data.location.country}</p>
      </div>
      <div className="info">
        <h4>Timezone</h4>
        <p>UTC {data.location.timezone}</p>
      </div>
      <div className="info">
        <h4>ISP</h4>
        <p>{data.isp}</p>
      </div>
    </div>
  );
};

export default IPInfoCard;
