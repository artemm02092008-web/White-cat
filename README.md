# Белый кот — сайт ветеринарной клиники

Сайт ветеринарной клиники «Белый кот» (Электросталь) на **Next.js 16** (App Router, Turbopack) + **React 19** + **Tailwind CSS 4**.

## Требования

- **Node.js** 20 или новее
- **npm** (идёт в комплекте с Node.js)

Проверить версии:

```bash
node -v
npm -v
```

## Установка

Установить зависимости (выполняется один раз после клонирования):

```bash
npm install
```

## Запуск

### Режим разработки (с горячей перезагрузкой)

```bash
npm run dev
```

Сайт откроется по адресу: **http://localhost:3000**

Изменения в файлах применяются автоматически, перезапускать не нужно.

### Production-сборка и запуск

```bash
npm run build
npm run start
```

После сборки сайт работает по адресу **http://localhost:3000** в оптимизированном режиме.

## Полезные команды

| Команда | Что делает |
| --- | --- |
| `npm run dev` | Запускает сервер разработки на `http://localhost:3000` |
| `npm run build` | Собирает production-версию сайта |
| `npm run start` | Запускает собранную production-версию (после `npm run build`) |
| `npm run lint` | Проверяет код линтером (ESLint) |

## Страницы сайта

| Адрес | Описание |
| --- | --- |
| `/` | Главная: hero, «Наш подход», отзывы, вопросы, контакты и карта |
| `/about` | О клинике |
| `/services` | Услуги и цены |
| `/specialists` | Врачи (список) |
| `/specialists/<slug>` | Страница отдельного врача |
| `/booking` | Запись на приём |

## Структура проекта

```
app/            страницы (App Router)
components/     переиспользуемые компоненты (шапка, подвал, секции)
content/        контент сайта (clinic.json)
lib/            типы и данные (clinic.ts, doctors.ts)
public/         статические файлы (картинки)
```

## Где менять контент

- **Тексты, телефоны, адрес, цены, отзывы, FAQ** — `content/clinic.json`
- **Список врачей** — `lib/doctors.ts`
- **Услуги и цены** — `app/services/page.tsx`
- **Картинки** — папка `public/`

## Возможные проблемы

### `npm run build` падает с ошибкой на `/services/[slug]`

Это остаточная страница-заглушка, она не используется. Удалите папку `app/services/[slug]` — сборка пройдёт без ошибок. В режиме разработки (`npm run dev`) эта ошибка не проявляется.

### Предупреждение про `package-lock.json`

Сообщение `Next.js ignored package-lock.json ... outside the current Git repository` — безобидное, на работу не влияет.

## Технологии

- [Next.js 16](https://nextjs.org/docs) — фреймворк (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — анимации
- [Lucide](https://lucide.dev) — иконки
