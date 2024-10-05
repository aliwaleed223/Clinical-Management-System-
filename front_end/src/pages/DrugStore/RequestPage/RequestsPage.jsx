import FilterRequests from "./FilterRequests";
import RequestHeader from "./RequestsHeader";
import Request from "./Requests";
import fake_data from './fake-requests.json'
const RequestPage = () => {
  return (
    <div className="w-[85%] mx-auto mb-4">
      <RequestHeader />
      <FilterRequests />
      {fake_data.map((request, index) => {
        return <Request requestDetails={request} />
      })}
    </div>
  );
}

export default RequestPage;