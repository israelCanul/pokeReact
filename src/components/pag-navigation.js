import { useNavigate } from "react-router-dom";
const PagNavigation = ({ itemsCount = 0, pag = 0, limit = 25 }) => {
  const navigate = useNavigate();
  const limitChange = (e) => {
    navigate(`/?pag=${pag}&limit=${e.target.value}`);
  };
  return (
    <div className="navPagination">
      <div className="navPagination__limit">
        <select name="limit" onChange={limitChange} value={limit}>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="navPagination__pages">
        <div className="navPagination__pag">1</div>
      </div>
    </div>
  );
};

export default PagNavigation;
