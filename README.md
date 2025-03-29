# OurTube Backend - MERN

## Overview

This is the backend for a YouTube-like application built using the MERN stack. It handles user authentication, video management, comments, likes, and subscriptions.

## Features

- User authentication (JWT-based)
- Likevideos
- Comment on videos
- Subscribe to channels
- User profile management
- MongoDB for data storage

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Token), bcrypt for password hashing
- **Storage**: Cloudinary/AWS S3 for video storage (configurable)

## Installation

### Prerequisites

- Node.js (>=14)
- MongoDB (local or cloud-based like MongoDB Atlas)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/RonitMurabiya/OurTube.git
   cd OurTube
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables: Create a `.env` file in the root directory and add:
   ```env
   PORT=8000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- ![register](https://github.com/user-attachments/assets/b7ac447e-9c83-4679-b07f-95d077498cf3)
- `POST /api/auth/login` - Login a user
- ![login](https://github.com/user-attachments/assets/9b3c383f-bc08-4630-bd87-e9af1bfd6f15)
- `POST /api/auth/logout` - Logout a user
- ![logout](https://github.com/user-attachments/assets/08da814e-dac3-46e6-a37b-42c080e1380a)



### Comments

- `POST /api/comments` - Add a comment
- `GET /api/comments/:videoId` - Get comments for a video

### User Management

- `GET /api/users/:username` - Get user profile
- ![user profile](https://github.com/user-attachments/assets/76a00d6a-ee48-414c-8402-a3f826676a46)
- `GET /api/users/watchHistory` - Get user Watch-History
- ![watch history](https://github.com/user-attachments/assets/acaf13ea-d1b3-4eb4-bf60-11619553e437)


## Deployment

To deploy the backend, use services like Vercel. Ensure environment variables are set correctly on the hosting platform.

## Contributing

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to the branch
5. Open a pull request
