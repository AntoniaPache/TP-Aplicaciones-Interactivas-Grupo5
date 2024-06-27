export default function CrearUser(){
  return(
<div>
<form class="needs-validation" novalidate="" className="formulario de Registro">
        <h4 class="mb-3">Crear Cuenta</h4>
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">First name</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-sm-6">
            <label for="lastName" class="form-label">Last name</label>
            <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
          <div class="col-12">
            <label for="username" class="form-label">Username</label>
            <div class="input-group has-validation">
              <span class="input-group-text">@</span>
              <input type="text" class="form-control" id="username" placeholder="Username" required="" />
              <div class="invalid-feedback">
                Your username is required.
              </div>
            </div>
          </div>
          <div class="col-12">
            <label for="email" class="form-label">Email <span class="text-body-secondary">(Optional)</span></label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com" />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          <div class="col-12">
            <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
            <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
          </div>
          <div class="col-md-5">
            <label for="country" class="form-label">Rol</label>
            <select class="form-select" id="country" required="">
              <option value="">Elija un rol...</option>
              <option>Vendedor</option>
              <option>Comprador</option>
            </select>
            <div class="invalid-feedback">
              Please select a valid rol.
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <button class="w-100 btn btn-primary btn-lg" type="submit" id="falsa_alerta" href="../index.html">Crear Cuenta</button>
      </form>
</div>
  );
}