import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputSwitch } from 'primereact/inputswitch';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge } from 'primereact/badge';
import { fetchDocData } from '../redux/doctors/doctorSlice';
import { updateDocStatus } from '../redux/doctors/updateDocStatusSlice';
import '../styles/doctors.css';

const Doctors = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctors);
  const [screenSize, setScreenSize] = useState(0);

  const updateStatus = (doctor) => {
    if (doctor.active) {
      const data = {
        id: doctor.id,
        doctor: {
          active: false,
        },
      };
      dispatch(updateDocStatus(data));
      dispatch(fetchDocData());
    } else {
      const data = {
        id: doctor.id,
        doctor: {
          active: true,
        },
      };
      dispatch(updateDocStatus(data));
      dispatch(fetchDocData());
    }
  };

  const header = (
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
      <h3 className="table-header text-uppercase fw-bold">Manage Doctors</h3>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );

  const basicInfo = (doctor) => (
    <div className="doc-profile">
      <img
        className="doc-img img-fluid bg-secondary"
        src={doctor.photo}
        alt=""
      />
      <div className="doc-content">
        <p className="name">{doctor.name}</p>
        <p className="contact text-muted">{doctor.email}</p>
      </div>
    </div>
  );

  const getSpecialty = (doctor) => (
    <div className="">{doctor.specialities}</div>
  );

  const getStatus = (doctor) => (doctor.active ? (
    <Badge value="active" severity="success" />
  ) : (
    <Badge value="inactive" severity="danger" style={{ paddingTop: '2px' }} />
  ));

  const getActions = (doctor) => (
    <div className="">
      <InputSwitch
        checked={doctor.active}
        onChange={() => updateStatus(doctor)}
      />
    </div>
  );

  const renderTable = () => {
    if (screenSize < 800) {
      return (
        <DataTable value={doctors} header={header} stripedRows>
          <Column field="basic_info" header="Basic Info" body={basicInfo} />
          <Column field="action" header="Action" body={getActions} />
        </DataTable>
      );
    }
    if (screenSize >= 800 && screenSize < 840) {
      return (
        <DataTable value={doctors} header={header} stripedRows>
          <Column field="basic_info" header="Basic Info" body={basicInfo} />
          <Column field="specialty" header="Specialty" body={getSpecialty} />
          <Column field="action" header="Action" body={getActions} />
        </DataTable>
      );
    }
    return (
      <DataTable value={doctors} header={header} stripedRows>
        <Column field="basic_info" header="Basic Info" body={basicInfo} />
        <Column field="specialty" header="Specialty" body={getSpecialty} />
        <Column field="status" header="Status" body={getStatus} />
        <Column field="action" header="Action" body={getActions} />
      </DataTable>
    );
  };

  useEffect(() => {
    dispatch(fetchDocData());
  }, [dispatch]);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial screen size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // console.log(screenSize);

  return (
    <section className="container-fluid doc-section">
      {/* <div className="doc_container border">
        <table className="table">
          <thead className="container">
            <tr className="">
              <th scope="col">Basic Info</th>
              <th scope="col" className="doc-date">
                Specialities
              </th>
              <th scope="col" className="doc-status">
                Status
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className="doc-profile">
                  <img
                    className="doc-img img-fluid bg-secondary"
                    src={doctor.photo}
                    alt=""
                  />
                  <div className="doc-content">
                    <p className="name">{doctor.name}</p>
                    <p className="contact text-muted">{doctor.email}</p>
                  </div>
                </td>
                <td className="doc-date-data">{doctor.specialities}</td>
                <td className="doc-status-data">
                  {doctor.active ? (
                    <span className="badge rounded-pill bg-success">
                      active
                    </span>
                  ) : (
                    <span className="badge rounded-pill bg-danger">
                      removed
                    </span>
                  )}
                </td>

                <td className="">
                  <div className="flex justify-content-center">
                    <InputSwitch
                      checked={doctor.active}
                      onChange={() => updateStatus(doctor)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="doc_profile" />
      </div> */}

      <div className="card">{renderTable()}</div>
    </section>
  );
};

export default Doctors;
