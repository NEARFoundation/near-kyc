// https://getbootstrap.com/docs/5.0/forms/floating-labels/
// https://getbootstrap.com/docs/5.0/forms/layout/
// https://getbootstrap.com/docs/5.0/layout/gutters/

export default function ApplicantForm({ onSubmit }: { onSubmit: (event: React.SyntheticEvent) => void }): JSX.Element {
  return (
    <form className="applicant-form mt-5" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-6 pb-2">
          <div className="form-floating">
            <input name="firstName" type="text" className="form-control" aria-label="First Name" required />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>
        <div className="col-md-6 pb-2">
          <div className="form-floating">
            <input name="lastName" type="text" className="form-control" aria-label="Last Name" required />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
      </div>

      <div className="pb-2">
        <div className="form-floating">
          <input name="email" type="email" className="form-control" required />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">Email Address</label>
        </div>
      </div>

      <div className="pb-2">
        <div className="form-floating">
          <input name="dob" type="date" className="form-control" required />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="dob">Date of Birth</label>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button name="submit" type="submit" className="btn btn-lg btn-primary">
          Start <i className="fa fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}