# 📝 Blogging Backend API

A RESTful backend application for a blogging platform built using **Node.js**, **Express.js**, and **MongoDB**.
This API allows users to create posts, like/unlike posts, and add comments.

---


## 📌 API Endpoints with Full HTTP Requests

---

### 📝 1. Create Post

```bash
POST /createPost
```

#### 🔹 cURL Request

```bash
curl -X POST http://localhost:4000/createPost \
-H "Content-Type: application/json" \
-d '{
  "title": "My First Blog",
  "body": "This is my blog content"
}'
```

---

### 💬 2. Create Comment

```bash
POST /createComment
```

#### 🔹 cURL Request

```bash
curl -X POST http://localhost:4000/createComment \
-H "Content-Type: application/json" \
-d '{
  "post": "POST_ID_HERE",
  "user": "Devang",
  "body": "Great blog!"
}'
```

---

### 📄 3. Get All Posts

```bash
GET /posts
```

#### 🔹 cURL Request

```bash
curl -X GET http://localhost:4000/posts
```

---

### ❤️ 4. Like a Post

```bash
POST /createLike
```

#### 🔹 cURL Request

```bash
curl -X POST http://localhost:4000/createLike \
-H "Content-Type: application/json" \
-d '{
  "post": "POST_ID_HERE",
  "user": "Devang"
}'
```

---

### ❌ 5. Unlike a Post

```bash
DELETE /unlikePost
```

#### 🔹 cURL Request

```bash
curl -X DELETE http://localhost:4000/unlikePost \
-H "Content-Type: application/json" \
-d '{
  "postId": "POST_ID_HERE",
  "likeId": "LIKE_ID_HERE"
}'
```

---

## 🧪 Notes

* Replace `"POST_ID_HERE"` with an actual post ID from your database.
* Replace `"LIKE_ID_HERE"` with the specific like ID you want to remove.
* Ensure MongoDB is running before testing.

---



## 🔐 Environment Variables

```bash
PORT=4000
DATABASE_URL=mongodb://127.0.0.1:27017/Blogging_App
```

---

## 👨‍💻 Author

**Devang Singh Mehta**

* 🎓 LNMIIT
* 💻 Full Stack Developer 
* 🔗 GitHub: https://github.com/devangs581-gif

---
