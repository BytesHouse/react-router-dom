import AsideBlock from "./components/AsideBlock/AsideBlock";
import {Outlet} from "react-router-dom";

function App() {
    const user = {
        photo: 'https://www.shutterstock.com/image-vector/vector-design-avatar-dummy-sign-600nw-1290556063.jpg',
        first_name: 'Alice',
        last_name: 'Smith',
        role: 'Pet owner',
        isActive: true
    }
  return (
    <div className="grid grid-cols-[1fr_2.5fr_1.5fr] gap-[20px]">
        <AsideBlock user={user}/>
        <Outlet />
        <div>Map</div>
    </div>
  );
}

export default App;
