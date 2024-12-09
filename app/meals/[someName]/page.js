export default function MealDetailsPage({params}){
    return (
        <main>
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            Meal Details
          </h1>
          <h2 style={{ color: 'white', textAlign: 'center' }}>
            {params.someName}
          </h2>
        </main>
      );
}