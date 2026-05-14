import User from './user';

function Table() {
  const collageData = [
    {
      name: 'collage',
      city: 'gagiyabaad',
      pin: 6748,
      student: [
        { name: 'anil', age: '50', id: 1, number: 11 },
        { name: 'shyam', age: '58', id: 19, number: 110 },
        { name: 'arun', age: '509', id: 81, number: 1001 },
      ]
    },
    {
      name: 'bancollage',
      city: 'delhi',
      pin: '67',
      student: [
        { name: 'ram', age: '55', id: 45, number: 21 },
      ]
    },
    {
      name: 'chalucollage',
      city: 'mumbai',
      pin: '670',
      student: [
         { name: 'anil', age: '50', id: 1, number: 11 },
        { name: 'shyam', age: '58', id: 19, number: 110 },
        { name: 'arun', age: '509', id: 81, number: 1001 },
      ]
    }
  ];

  return (
    <div>
      {
        collageData.map((data, index) => (
          <div key={index}>
            <User data={data}/>
            
            {
              data.student.map((student_data) => (
                <div key={student_data.id}>
                  <h5>name: {student_data.name}</h5>
                  <h5>id: {student_data.id}</h5>
                  <h5>number: {student_data.number}</h5>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default Table;