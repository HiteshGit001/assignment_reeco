/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import './App.css'
import CustomCard from './components/customComponent/CustomCard'
import CustomTable from './components/customComponent/CustomTable'
import SupplierDetails from './components/supplierDetails/SupplierDetails'
import useAppSelector from './hooks/useAppSelector';
import DummyData from "./utils/dummyData.json";
import { updateSupplierData, updateSupplierList } from './store/slice/supplierSlice';
import { useDispatch } from 'react-redux';
import CustomModal from './components/customComponent/CustomModal';
import { labels } from './utils/labels';
import EditModal from './components/editModal/EditModal';
import NavBar from './components/navBar/NavBar';

function App() {
  const { supplierData } = useAppSelector((state) => state.supplier);
  const dispatch = useDispatch();

  // modal for disapprove
  const [disApproveModal, setDisApproveModal] = useState("");
  const [disProductName, setDisProductName] = useState("");

  // modal for edit
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState<any>({});

  const column = [
    { label: "", key: "img" },
    { label: "Product name", key: "productName" },
    { label: "Brand", key: "brand" },
    { label: "Price", key: "price" },
    { label: "Quantity", key: "quantity" },
    { label: "Total", key: "total" },
    { label: "Status", key: "status" },
    { label: "", key: "action" }
  ];

  const handleChange = (event: any) => {
    console.log(event.target.value);
  }

  const handleEdit = (id: string, item: any) => {
    console.log("edit", id);
    setEditModal(!editModal);
    setEditData(item);
  }

  const handleAccept = (id: string) => {
    console.log("accept", id);
    dispatch(updateSupplierData({ id, key: "status", value: "Approved" }))
  }

  const handleRegect = (id: string, name: string) => {
    console.log("regect", id);
    setDisApproveModal(id);
    setDisProductName(name);
  }

  const confirmRegect = (id: string, isYes: boolean) => {
    if (isYes) {
      dispatch(updateSupplierData({ id, key: "status", value: "Missing" }));
    }
    setDisApproveModal("");
    setDisProductName("");
  }

  useEffect(() => {
    dispatch(updateSupplierList(DummyData))
  }, []);

  return (
    <>
      <NavBar />
      <CustomModal label={labels.missingProduct}
        isOpen={disApproveModal ? true : false}
        close={() => confirmRegect(disApproveModal, false)}
        body={
          <>
            <p style={{ marginTop: "1rem" }} >is {disProductName} urgent</p>
            <div style={{ margin: "1rem 0 0 0", display: "flex", justifyContent: "flex-end", alignItems: "flex-end", gap: "0.5rem" }}>
              <p className='pointer f_bold' onClick={() => confirmRegect(disApproveModal, false)}>{labels.no}</p>
              <p className='pointer f_bold' onClick={() => confirmRegect(disApproveModal, true)}>{labels.yes}</p>
            </div>
          </>
        } />
      <CustomModal label='' isOpen={editModal}
        close={() => handleEdit("", {})}
        body={
          <EditModal
            close={() => handleEdit("", {})}
            item={editData} />
        }
      />
      <div style={{ margin: "2rem" }}>
        <CustomCard body={<SupplierDetails />} />
        <CustomCard body={<CustomTable
          handleEdit={handleEdit}
          handleAccept={handleAccept}
          handleRegect={handleRegect}
          onChange={(e: any) => handleChange(e)}
          data={supplierData}
          column={column}
        />} />
      </div>
    </>
  )
}

export default App
