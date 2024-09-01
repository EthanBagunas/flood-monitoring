import{useLocation,Navigate,Outlet} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

    const RequireAuth = ({ allowedRoles }) => {
        const { auth = { roles: [] } } = useAuth(); // Default to empty array
        const location = useLocation();
    
        console.log('Auth:', auth);
        console.log('Allowed Roles:', allowedRoles);
    
        const userRoles = auth?.roles?.map(role => role.toString());
        const permittedRoles = allowedRoles.map(role => role.toString());
    
        return (
            userRoles?.find(role => permittedRoles.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
        );
    }
    


export default RequireAuth;