# ip
Idea Platform Manifests and Helm Charts

# 1. Деплоим PV + PVC
cd ip/manifests/pv_pvc
kubectl apply -f .

# 2. Конфигурируем configMap и деплоим (не применяем, на текущем этапе, ip-app-elk-configmap)

# 3. Первый - ip-app-gateway-web
# Копируем статические файлы на шару /nfs/ip_data/static через контейнер ip-app-gateway-web
# kubectl cp ../static/. ip-app-gateway-web-56dd8f59c5-xn8cr:/app/webApp/static
