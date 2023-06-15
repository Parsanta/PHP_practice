import Table from "react-bootstrap/Table";
import {data} from "../components/Data";

export const Schoolinfo = () => {
  const { Items } = data;
  return (
    <div className="school" id="school">
      <h1>School info </h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Dept_code</th>
            <th>prof_specs</th>
            <th>prof_rank</th>
            <th>prof_cname</th>
            <th>prof_fname</th>
            <th>prof_initials</th>
            <th>prof_email</th>
          </tr>
        </thead>
        <tbody>
          {Items.map((item) => (
            <tr key={item.prof_num}>
              <td>{item.prof_num}</td>
              <td>{item.Dept_code}</td>
              <td>{item.prof_specs}</td>
              <td>{item.prof_rank}</td>
              <td>{item.prof_cname}</td>
              <td>{item.prof_fname}</td>
              <td>{item.prof_initials}</td>
              <td>{item.prof_email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
