import {Routes, Route} from 'react-router-dom';

import {DashBoardPage, PageNotFound, LoginPage} from './pages'
import { Panel } from './components/panels';
import { AddProductPanel } from './components/panels';
import { EditProductPanel } from './components/panels';

function App() {
 
  return (
       <>
          <Routes>
            <Route index element={<LoginPage/>} />
            <Route path="dashboard" element={<DashBoardPage/>}>
              <Route index element={<Panel title="View All Inventory"/>} />
              <Route path="add" element={<AddProductPanel title="Add a New Product"/>} />
              <Route path="edit" element={<EditProductPanel title="Edit a Product"/>} />
            </Route>
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
       </>
  );
}

export default App;

 
