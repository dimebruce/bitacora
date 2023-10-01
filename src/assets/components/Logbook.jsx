import React from "react";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Se envió form");
};

const Logbook = () => {
  return (
    <>
      {/* Data Work */}
      <div className="p-3 mx-3 mt-5 shadow p-3 mb-5 bg-body-tertiary rounded row justify-content-center">
        <h3 className="">Datos de la Obra</h3>
        <form
          className="row g-3 needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="col-md-4">
            <label htmlFor="nameProject" className="form-label">
              Nombre de la obra
            </label>
            <input
              type="text"
              className="form-control"
              id="nameProject"
              placeholder="Tren Maya"
              required
            />
            <div className="valid-feedback"></div>
          </div>
          <div className="col-md-4">
            <label htmlFor="address" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Carretera S/N, Yucantán"
              required
            />
            <div className="valid-feedback"></div>
          </div>
          <div className="col-md-2">
            <label htmlFor="numberContract" className="form-label">
              # Contrato
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                No-
              </span>
              <input
                type="text"
                className="form-control"
                id="numberContract"
                placeholder="5236"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-2">
            <label htmlFor="numberWork" className="form-label">
              # Obra
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                No-
              </span>
              <input
                type="text"
                className="form-control"
                id="numberWork"
                placeholder="6398"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="startDate" className="form-label">
              Fecha Inicio
            </label>
            <input
              type="text"
              className="form-control"
              id="startDate"
              placeholder="23/02/2022"
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="endDate" className="form-label">
              Fecha Término
            </label>
            <input
              type="text"
              className="form-control"
              id="endDate"
              placeholder="30/11/2023"
              required
            />
            <div className="invalid-feedback"></div>
          </div>
        </form>
      </div>

      {/* Data Business */}
      <div className="p-3 mx-3 mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
        <h3 className="">Datos del Contratista</h3>
        <form
          className="row g-3 needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="col-md-4">
            <label htmlFor="nameSocial" className="form-label">
              Razón Social
            </label>
            <input
              type="text"
              className="form-control"
              id="nameSocial"
              placeholder="Mi Empresa S.A. de C.V."
              required
            />
            <div className="valid-feedback"></div>
          </div>
          <div className="col-md-4">
            <label htmlFor="addressBusiness" className="form-label">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="addressBusiness"
              placeholder="Ciudad de México S/N, CDMX"
              required
            />
            <div className="valid-feedback"></div>
          </div>
          <div className="col-md-2">
            <label htmlFor="numberDocument" className="form-label">
              # Documento
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                No-
              </span>
              <input
                type="text"
                className="form-control"
                id="numberDocument"
                placeholder="8574"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-2">
            <label htmlFor="phoneBusiness" className="form-label">
              Télefono
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="phoneBusiness"
                placeholder="5536987412"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
        </form>
      </div>

      {/* Data Activity */}
      <div className="p-3 mx-3 mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
        <h3>Actividades</h3>
        <div className="">
          <textarea
            className="form-control"
            placeholder="Describe las actividades realizadas"
            id="floatingTextarea2"
            style={{ height: "100px" }} // Establece el estilo como un objeto JS
          ></textarea>
        </div>
      </div>

      {/* Photos */}
      <div className="p-3 mx-3 mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
        <h3>Evidencia (Fotos)</h3>
        <div className="input-group mb-3">
          <input type="file" className="form-control" id="inputGroupFile02" />
          <label className="input-group-text" htmlFor="inputGroupFile02">
            Subir
          </label>
        </div>
      </div>

      {/* Data Work */}
      <div className="p-3 mx-3 mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
        <h3 className="">Firma del Responsable</h3>
        <form
          className="row g-3 needs-validation"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="col-md-4">
            <label htmlFor="namePerson" className="form-label">
              Nombre del encargado
            </label>
            <input
              type="text"
              className="form-control"
              id="namePerson"
              placeholder="Luis Barragán"
              required
            />
            <div className="valid-feedback"></div>
          </div>
          <div className="col-md-4">
            <label htmlFor="sign" className="form-label">
              Certificado
            </label>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
              />
              <label className="input-group-text" htmlFor="inputGroupFile02">
                .cer
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="sign" className="form-label">
              Llave
            </label>
            <div className="input-group mb-3">
              <input
                type="file"
                className="form-control"
                id="inputGroupFile02"
              />
              <label className="input-group-text" htmlFor="inputGroupFile02">
                .key
              </label>
            </div>
          </div>
        </form>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            ENVIAR
          </button>
        </div>
      </div>
    </>
  );
};

export default Logbook;
