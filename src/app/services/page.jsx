import Link from 'next/link';
import React from 'react';

const page = () => {
    const data = [
        {
            "id": 1,
            "name": "Alice Johnson",
            "details": "Enthusiastic web developer with a knack for front-end design.",
            "fake_image_url": "https://randomuser.me/api/portraits/women/1.jpg",
            "email": "alice.johnson@example.com",
            "is_active": true,
            "created_at": "2024-11-23T10:12:45Z"
        },
        {
            "id": 2,
            "name": "Brian Ortega",
            "details": "Data analyst specializing in market trends and visualization.",
            "fake_image_url": "https://randomuser.me/api/portraits/men/2.jpg",
            "email": "brian.ortega@example.com",
            "is_active": false,
            "created_at": "2023-09-19T08:45:10Z"
        },
        {
            "id": 3,
            "name": "Chloe Zhang",
            "details": "UI/UX designer passionate about accessibility and user flow.",
            "fake_image_url": "https://randomuser.me/api/portraits/women/3.jpg",
            "email": "chloe.zhang@example.com",
            "is_active": true,
            "created_at": "2025-02-02T14:30:00Z"
        },
        {
            "id": 4,
            "name": "David Miller",
            "details": "Full-stack engineer with experience in microservices and cloud deployment.",
            "fake_image_url": "https://randomuser.me/api/portraits/men/4.jpg",
            "email": "david.miller@example.com",
            "is_active": true,
            "created_at": "2022-06-11T09:00:00Z"
        },
        {
            "id": 5,
            "name": "Ella Rossi",
            "details": "Project manager with a background in Agile and remote team coordination.",
            "fake_image_url": "https://randomuser.me/api/portraits/women/5.jpg",
            "email": "ella.rossi@example.com",
            "is_active": false,
            "created_at": "2021-12-01T16:22:18Z"
        }
    ]

    return (
        <div>
            <h1 className='text-center font-bold'>My all Client Name</h1>

            {
                data.map(item => <button className='btn btn-accent shadow-5xl m-2 border-2'>
                    <Link href={`/services/${item.id}`}>
                        <div className='flex gap-5 '>
                            {item.name}
                        </div>
                    </Link>
                </button>)
            }

        </div>
    );
};

export default page;