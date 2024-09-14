import SelectOnActivites from "./SelectBasedOnActivities";
import SelectOnUser from "./SelectBasedOnUsers";


const FilterAndSelect = () => {
  return (
    <div className="h-24 w-[95%] flex flex-row-reverse  items-center gap-4 relative ">
      <SelectOnActivites />
      <SelectOnUser />
    </div>
  );
}
 
export default FilterAndSelect;