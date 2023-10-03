function Page() {

    const educationData = {
        education: [
            {
                school: 'Indian Institute of Technology, Guwahati',
                date: '2021-2025',
                degree: 'B.Tech'
            },
            {
                school: 'Ryan International School',
                date: '2020',
                degree: '12th'
            },
            {
                school: 'Ryan International School',
                date: '2018',
                degree: '10th'
            }
        ]
    };

    return (
        <div className="flex flex-1 w-full justify-between">
            <div className="text-light-1 ">
                <p className="text-15xl">

                GRADUATION
                </p>
                <div className="text-light-1">
                    {'{'}
                    <br />
                    {'school:'}
                    <br />
                    {''}start:{' '}
                    <br />
                    {'end:'}
                    <br />
                    {'}'}
                </div>
            </div>
            <div
                className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50">
            </div>
            <div className="text-light-1">
                Highschool
                <div className="text-light-1">
                    {'{'}
                    <br />
                    {'school:'}
                    <br />
                    {''}start:{' '}
                    <br />
                    {'end:'}
                    <br />
                    {'}'}
                </div>
            </div>
        </div>

    )
}

export default Page