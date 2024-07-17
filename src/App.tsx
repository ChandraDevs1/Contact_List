import Interface from "./components/Interface";

export default function App() {
  let Contacts = [
    {
      name: "Amit Sharma",
      address: "123 Main St, Mumbai, Maharashtra",
      mobile: "+91 98765 43210",
      email: "amit.sharma@example.com",
    },
    {
      name: "Priya Gupta",
      address: "45 Park Ave, Delhi",
      mobile: "+91 99876 54321",
      email: "priya.gupta@example.com",
    },
    {
      name: "Rahul Verma",
      address: "12 Elm St, Bangalore, Karnataka",
      mobile: "+91 99887 65432",
      email: "rahul.verma@example.com",
    },
    {
      name: "Sneha Mehta",
      address: "34 Oak Rd, Pune, Maharashtra",
      mobile: "+91 98765 43210",
      email: "sneha.mehta@example.com",
    },
    {
      name: "Karan Singh",
      address: "78 Pine St, Kolkata, West Bengal",
      mobile: "+91 87654 32109",
      email: "karan.singh@example.com",
    },
    {
      name: "Neha Joshi",
      address: "56 Cedar Blvd, Chennai, Tamil Nadu",
      mobile: "+91 91234 56789",
      email: "neha.joshi@example.com",
    },
    {
      name: "Rohan Bansal",
      address: "90 Maple St, Hyderabad, Telangana",
      mobile: "+91 98765 12345",
      email: "rohan.bansal@example.com",
    },
    {
      name: "Anjali Rao",
      address: "21 Birch Ln, Ahmedabad, Gujarat",
      mobile: "+91 99876 54321",
      email: "anjali.rao@example.com",
    },
    {
      name: "Vikram Yadav",
      address: "32 Willow Dr, Jaipur, Rajasthan",
      mobile: "+91 98765 67890",
      email: "vikram.yadav@example.com",
    },
    {
      name: "Pooja Sharma",
      address: "54 Chestnut St, Surat, Gujarat",
      mobile: "+91 87654 32109",
      email: "pooja.sharma@example.com",
    },
    {
      name: "Aditya Patel",
      address: "67 Cypress Rd, Kanpur, Uttar Pradesh",
      mobile: "+91 99887 65432",
      email: "aditya.patel@example.com",
    },
    {
      name: "Kavita Desai",
      address: "11 Ash St, Vadodara, Gujarat",
      mobile: "+91 98765 43210",
      email: "kavita.desai@example.com",
    },
    {
      name: "Sandeep Nair",
      address: "22 Poplar Ave, Cochin, Kerala",
      mobile: "+91 91234 56789",
      email: "sandeep.nair@example.com",
    },
    {
      name: "Neeraj Gupta",
      address: "33 Redwood St, Lucknow, Uttar Pradesh",
      mobile: "+91 99876 54321",
      email: "neeraj.gupta@example.com",
    },
    {
      name: "Rani Singh",
      address: "44 Fir St, Nashik, Maharashtra",
      mobile: "+91 98765 67890",
      email: "rani.singh@example.com",
    },
    {
      name: "Arjun Khanna",
      address: "55 Maple Dr, Indore, Madhya Pradesh",
      mobile: "+91 87654 32109",
      email: "arjun.khanna@example.com",
    },
    {
      name: "Meena Sethi",
      address: "66 Olive Rd, Bhopal, Madhya Pradesh",
      mobile: "+91 99887 65432",
      email: "meena.sethi@example.com",
    },
    {
      name: "Vinay Kumar",
      address: "77 Peach Ave, Amritsar, Punjab",
      mobile: "+91 98765 43210",
      email: "vinay.kumar@example.com",
    },
    {
      name: "Ruchi Sharma",
      address: "88 Lemon St, Patna, Bihar",
      mobile: "+91 91234 56789",
      email: "ruchi.sharma@example.com",
    },
    {
      name: "Suresh Reddy",
      address: "99 Mango Rd, Visakhapatnam, Andhra Pradesh",
      mobile: "+91 99876 54321",
      email: "suresh.reddy@example.com",
    },
    {
      name: "Tanvi Joshi",
      address: "10 Coconut St, Raipur, Chhattisgarh",
      mobile: "+91 98765 67890",
      email: "tanvi.joshi@example.com",
    },
    {
      name: "Sanjay Malik",
      address: "23 Avocado Blvd, Shillong, Meghalaya",
      mobile: "+91 87654 32109",
      email: "sanjay.malik@example.com",
    },
    {
      name: "Geeta Verma",
      address: "34 Apricot Ln, Guwahati, Assam",
      mobile: "+91 99887 65432",
      email: "geeta.verma@example.com",
    },
    {
      name: "Aakash Tyagi",
      address: "45 Kiwi Rd, Dehradun, Uttarakhand",
      mobile: "+91 98765 43210",
      email: "aakash.tyagi@example.com",
    },
    {
      name: "Nisha Rani",
      address: "56 Plum St, Ranchi, Jharkhand",
      mobile: "+91 91234 56789",
      email: "nisha.rani@example.com",
    },
    {
      name: "Mohit Kapoor",
      address: "67 Guava Rd, Varanasi, Uttar Pradesh",
      mobile: "+91 99876 54321",
      email: "mohit.kapoor@example.com",
    },
    {
      name: "Riya Chatterjee",
      address: "78 Walnut St, Siliguri, West Bengal",
      mobile: "+91 98765 67890",
      email: "riya.chatterjee@example.com",
    },
    {
      name: "Kunal Saini",
      address: "89 Lychee Ave, Jodhpur, Rajasthan",
      mobile: "+91 87654 32109",
      email: "kunal.saini@example.com",
    },
    {
      name: "Aditi Bhattacharya",
      address: "90 Lychee Blvd, Mangalore, Karnataka",
      mobile: "+91 99887 65432",
      email: "aditi.bhattacharya@example.com",
    },
    {
      name: "Deepak Jain",
      address: "12 Cherry Ln, Kalyan, Maharashtra",
      mobile: "+91 98765 43210",
      email: "deepak.jain@example.com",
    },
    {
      name: "Swati Agarwal",
      address: "23 Papaya St, Agra, Uttar Pradesh",
      mobile: "+91 91234 56789",
      email: "swati.agarwal@example.com",
    },
    {
      name: "Vikas Bhatia",
      address: "34 Starfruit Rd, Surat, Gujarat",
      mobile: "+91 99876 54321",
      email: "vikas.bhatia@example.com",
    },
    {
      name: "Tanya Malhotra",
      address: "45 Pomegranate Blvd, Vadodara, Gujarat",
      mobile: "+91 98765 67890",
      email: "tanya.malhotra@example.com",
    },
    {
      name: "Sahil Mehta",
      address: "56 Mulberry St, Navi Mumbai, Maharashtra",
      mobile: "+91 87654 32109",
      email: "sahil.mehta@example.com",
    },
    {
      name: "Asha Gupta",
      address: "67 Blackberry Ave, Noida, Uttar Pradesh",
      mobile: "+91 99887 65432",
      email: "asha.gupta@example.com",
    },
    {
      name: "Ramesh Nair",
      address: "78 Cactus Rd, Mysore, Karnataka",
      mobile: "+91 98765 43210",
      email: "ramesh.nair@example.com",
    },
    {
      name: "Priyanka Choudhary",
      address: "89 Almond St, Bhubaneswar, Odisha",
      mobile: "+91 91234 56789",
      email: "priyanka.choudhary@example.com",
    },
    {
      name: "Abhishek Roy",
      address: "90 Lemon Rd, Agartala, Tripura",
      mobile: "+91 99876 54321",
      email: "abhishek.roy@example.com",
    },
    {
      name: "Nitin Sharma",
      address: "12 Coconut Ave, Shimla, Himachal Pradesh",
      mobile: "+91 98765 67890",
      email: "nitin.sharma@example.com",
    },
    {
      name: "Seema Reddy",
      address: "23 Apricot St, Patiala, Punjab",
      mobile: "+91 87654 32109",
      email: "seema.reddy@example.com",
    },
    {
      name: "Raghav Singh",
      address: "34 Cherry Ln, Jalandhar, Punjab",
      mobile: "+91 99887 65432",
      email: "raghav.singh@example.com",
    },
  ];

  // Contacts = [];

  return (
    <div>
      {Contacts.length > 0 ? (
        <table className="table">
          <thead className="table-light">
            <tr className="table-striped table-bordered">
              <th scope="col">#</th>
              <th scope="col">Name 📛</th>
              <th scope="col">Address 📢</th>
              <th scope="col">Mobile 📱</th>
              <th scope="col">Email 📨</th>
            </tr>
          </thead>
          <tbody>
            {Contacts.map((data, idx) => (
              <Interface
                key={idx}
                index={idx}
                name={data.name}
                address={data.address}
                mobile={data.mobile}
                email={data.email}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div>Error: No contacts found</div>
      )}
    </div>
  );
}
