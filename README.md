# docker-2tier-project-group-2
cat >> README.md << 'EOF'

## 🚀 Quick Start
```bash
# Clone and run
git clone https://github.com/kehinde98/docker-2tier-project-group-2.git
cd docker-2tier-project-group-2
docker-compose up --build
```

## 🌐 Access

- Frontend: http://localhost
- Backend: http://localhost:5000 

## 🛑 Stop
```bash
docker-compose down
```

## 📁 Structure

- `backend/` - Flask API (port 5000)
- `frontend/` - React app (port 80)
- `docker-compose.yml` - Container orchestration
EOF

## Docker Hub
```bash
# Pull to your local repo
docker pull obnogil/frontend:v1.0
docker pull obnogil/backend:v1.0

## Link To Docker Hub Repo
https://hub.docker.com/repositories/obnogil
