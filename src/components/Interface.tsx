interface Props {
  name: string;
  address: string;
  mobile: string;
  email: string;
  index: number;
}

const Interface = (data: Props) => {
  return (
    <tr>
      <th scope="row">{data.index + 1}</th>
      <td>{data.name}</td>
      <td>{data.address}</td>
      <td>{data.mobile}</td>
      <td>{data.email}</td>
    </tr>
  );
};

export default Interface;
