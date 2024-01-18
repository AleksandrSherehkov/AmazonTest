export const Home = () => {
  return (
    <div className="p-8 bg-gray-200 w-full  flex justify-center items-center">
      <div className="max-w-4xl mx-auto  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="py-4 px-8">
          <h2 className="text-2xl font-semibold text-gray-800">Тестове завдання "Таблиці"</h2>
          <div className="mt-4 text-gray-600">
            <p className="mb-5">Стек технологій: React | Vite | TypeScript</p>
            <p className="mb-4">Завдання.</p>
            <p>Створити веб-застосунок із такою ієрархічною структурою сторінок(таблиць):</p>

            <p className="p-4  text-bold text-lg text-black">
              Accounts &rarr; Profiles &rarr; Campaigns
            </p>

            <p>
              Table [Accounts]: {'{'} "accountId", "email", "authToken", "creationDate" {'}'}
            </p>
            <p>
              Table [Profiles of selected account]: {'{'} "profileId", "country", "marketplace"{' '}
              {'}'}
            </p>
            <p className="mb-4">
              Table [Campaigns of selected profile]: {'{'} "campaignId", "clicks", "cost", "date"{' '}
              {'}'}
            </p>
            <p>
              3 клікабельні таблиці, які при кліку по одному з рядків - переходять по структурі у
              вибрану entity.
            </p>
            <p className="mb-4">
              Реалізувати сортування, фільтрування та пагінацію до кожної з таблиць.
            </p>
            <p>Можна використовувати Bootstrap модулі для дизайну сторінок/таблиць.</p>
            <p className="mb-4">
              Набір даних задати константами в коді. (або використати будь-які методи імітування
              виводу даних із бекенду)
            </p>
            <p className="italic">
              Будь-які проявлені ініціативи по додавання функціоналу в застосунок - вітаються.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
