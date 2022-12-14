import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export default function addParams(Child) {
   return (props) => {
      const [searchParams] = useSearchParams();
      const navigate = useNavigate();
      const params = useParams();
      return (
         <Child
            {...props}
            params={params}
            searchParams={searchParams}
            navigate={navigate}
         />
      );
   };
}