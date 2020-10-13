1-  Install docker
2-  Install docker compose on Linux
    sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
3-  Open the project directory
4-  In CMD type "docker-compose build"
5-  In CMD type "docker-compose up"


Sample Services:

1-POST/ URL: 192.168.99.100:3000/kitchen-app

{
    "title":"mrmor",
    "description":"Test 1"


}

2- GET/ URL: 192.168.99.100:3000/kitchen-app

  [
    {
        "id": 1,
        "title": "mrmor",
        "description": "Test 1",
        "published": false,
        "createdAt": "2020-08-22T19:43:40.000Z",
        "updatedAt": "2020-08-22T19:43:40.000Z"
    },
    {
        "id": 2,
        "title": "mrmor",
        "description": "Test 1",
        "published": false,
        "createdAt": "2020-08-22T19:58:12.000Z",
        "updatedAt": "2020-08-22T19:58:12.000Z"
    },
    {
        "id": 3,
        "title": "mrmor",
        "description": "Test 1",
        "published": false,
        "createdAt": "2020-08-22T19:58:12.000Z",
        "updatedAt": "2020-08-22T19:58:12.000Z"
    },
    {
        "id": 4,
        "title": "mrmor",
        "description": "Test 1",
        "published": false,
        "createdAt": "2020-08-22T19:58:13.000Z",
        "updatedAt": "2020-08-22T19:58:13.000Z"
    },
    {
        "id": 5,
        "title": "mrmor",
        "description": "Test 1",
        "published": false,
        "createdAt": "2020-08-22T19:58:13.000Z",
        "updatedAt": "2020-08-22T19:58:13.000Z"
    },
    {
        "id": 6,
        "title": "mrmor",
        "description": "Test 1",
        "published": false,
        "createdAt": "2020-08-22T19:58:14.000Z",
        "updatedAt": "2020-08-22T19:58:14.000Z"
    },
    {
        "id": 7,
        "title": "mrmor",
        "description": "Test 1",
        "published": false,
        "createdAt": "2020-08-22T19:58:14.000Z",
        "updatedAt": "2020-08-22T19:58:14.000Z"
    }
]
