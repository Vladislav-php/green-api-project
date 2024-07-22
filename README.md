# GREEN-API Test Page

## Описание
Этот проект представляет собой простую HTML-страницу, которая взаимодействует с методами GREEN-API. Он демонстрирует, как использовать различные вызовы API с использованием JavaScript и Axios.

## Алгоритм работы

1. **Создание инстанса в GREEN-API:**
    - Зайдите в личный кабинет GREEN-API и создайте новый инстанс на бесплатном аккаунте разработчика.
    - Сканируйте QR-код и подключите свой номер телефона к инстансу.

2. **Подключение к инстансу:**
    - Перейдите на разработанную страницу (ссылка на GitHub Pages).
    - Введите параметры подключения к инстансу: `idInstance` и `ApiTokenInstance`.

3. **Выполнение API-запросов:**
    - Нажмите на кнопки «Get Settings», «Get State Instance», «Send Message», и «Send File By URL» и просмотрите результаты работы в поле `Response`.

## Установка и запуск
1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/Vladislav-php/green-api-project.git
    ```
2. Перейдите в директорию проекта:
    ```bash
    cd green-api-project
    ```
3. Установите зависимости:
    ```bash
    npm install
    ```
4. Запустите локальный сервер (например, используя Live Server в VSCode) или откройте `index.html` в браузере.

## Использование
1. Введите ваши `idInstance` и `apiTokenInstance`.
2. Нажмите на одну из кнопок, чтобы выполнить соответствующий API-запрос.
3. Ответ от API будет отображен в поле `Response`.

## Примеры ответов
### Get Settings
```json
{
  "wid": "79017117215@c.us",
  "countryInstance": "",
  "typeAccount": "",
  "webhookUrl": "",
  "webhookUrlToken": "",
  "delaySendMessagesMilliseconds": 0,
  "markIncomingMessagesReaded": "no",
  "markIncomingMessagesReadedOnReply": "no",
  "sharedSession": "no",
  "proxyInstance": "system proxy",
  "outgoingWebhook": "no",
  "outgoingMessageWebhook": "no",
  "outgoingAPIMessageWebhook": "no",
  "incomingWebhook": "no",
  "deviceWebhook": "no",
  "statusInstanceWebhook": "no",
  "stateWebhook": "no",
  "enableMessagesHistory": "no",
  "keepOnlineStatus": "no",
  "pollMessageWebhook": "no",
  "incomingBlockWebhook": "no",
  "incomingCallWebhook": "no"
}
