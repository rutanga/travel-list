import React from "react";

export default function Mine() {
  const students = [
    {
      surname: "Mumararungu",
      given_name: "Phionah",
      age: 20,
      active: false,
    },
    {
      surname: "Mariamungu",
      given_name: "Agnes",
      age: 30,
      active: true,
    },
    {
      surname: "Rumbowa",
      given_name: "Aggrey",
      age: 20,
      active: true,
    },
    {
      surname: "Hoozambe",
      given_name: "Ronald",
      age: 17,
      active: false,
    },
    {
      surname: "Hoozambe",
      given_name: "Ronald",
      age: 9,
      active: false,
    },
  ];

  const friend1 = "Micheal";
  const friend2 = "Jonas";

  const friends_array = [friend1, friend2];

  const all_surnames = students.map((student) => student.surname);
  students.forEach((student) => console.log(student.active));
  return (
    <div>
      <div>
        {students.map((student) => (
          <p>
            {student.surname} {student.given_name} {student.age}{" "}
            {student.active ? "True" : "False"}
          </p>
        ))}
      </div>
    </div>
  );
}
