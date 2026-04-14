import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-golos text-gray-900">

      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-start gap-4">
          <div className="w-12 h-12 bg-[#1a3a6b] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon name="Plus" size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-gray-900 tracking-tight">
              Центральная городская клиническая больница №3
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              Муниципальное учреждение здравоохранения
            </p>
          </div>
        </div>
      </header>

      {/* Announcement Banner */}
      <section className="border-b border-gray-200 bg-[#fdf8f0]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Icon name="AlertCircle" size={16} className="text-[#c47b00] flex-shrink-0" />
          <p className="text-sm text-[#7a4f00] font-medium">
            Режим работы регистратуры: пн–пт 07:30 – 18:00, сб 08:00 – 14:00
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-10">

        {/* Sick Leave Notice */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-6 bg-[#1a3a6b]"></div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Больничные листы</h2>
          </div>

          <div className="border border-gray-200 rounded-sm divide-y divide-gray-100">

            <div className="p-5 flex gap-4">
              <div className="w-8 h-8 bg-gray-100 rounded-sm flex items-center justify-center flex-shrink-0">
                <Icon name="FileText" size={16} className="text-[#1a3a6b]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Оформление листка нетрудоспособности</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Больничный лист оформляется лечащим врачом при первичном обращении. При себе необходимо иметь паспорт и полис ОМС. Электронный больничный передаётся напрямую в Социальный фонд России.
                </p>
              </div>
            </div>

            <div className="p-5 flex gap-4">
              <div className="w-8 h-8 bg-gray-100 rounded-sm flex items-center justify-center flex-shrink-0">
                <Icon name="RefreshCw" size={16} className="text-[#1a3a6b]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Продление больничного листа</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Продление осуществляется лечащим врачом на основании осмотра. Врач единолично может продлевать больничный до 15 дней. На более длительный срок необходимо решение врачебной комиссии.
                </p>
              </div>
            </div>

            <div className="p-5 flex gap-4">
              <div className="w-8 h-8 bg-gray-100 rounded-sm flex items-center justify-center flex-shrink-0">
                <Icon name="ClipboardList" size={16} className="text-[#1a3a6b]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Необходимые документы</h3>
                <ul className="text-sm text-gray-600 space-y-1 mt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a3a6b] mt-0.5">—</span>
                    <span>Паспорт гражданина Российской Федерации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a3a6b] mt-0.5">—</span>
                    <span>Полис обязательного медицинского страхования (ОМС)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1a3a6b] mt-0.5">—</span>
                    <span>СНИЛС (при наличии)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-[#f0f4fb] flex gap-4">
              <div className="w-8 h-8 bg-[#1a3a6b]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                <Icon name="Info" size={16} className="text-[#1a3a6b]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a3a6b] mb-1">Важно</h3>
                <p className="text-sm text-[#2a4a7b] leading-relaxed">
                  С 2022 года все больничные листы оформляются только в электронном виде. Бумажный вариант выдаётся в исключительных случаях по отдельному заявлению.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Contacts */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-6 bg-[#1a3a6b]"></div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Контакты и адрес</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="border border-gray-200 rounded-sm p-5 space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="Phone" size={15} className="text-[#1a3a6b]" />
                Телефоны
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Регистратура</p>
                  <a href="tel:+73422000001" className="text-lg font-semibold text-gray-900 hover:text-[#1a3a6b] transition-colors">
                    +7 (342) 200-00-01
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Справочная</p>
                  <a href="tel:+73422000002" className="text-lg font-semibold text-gray-900 hover:text-[#1a3a6b] transition-colors">
                    +7 (342) 200-00-02
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Скорая помощь</p>
                  <a href="tel:103" className="text-lg font-bold text-[#c0392b] hover:text-[#922b21] transition-colors">
                    103
                  </a>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-sm p-5 space-y-4">
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <Icon name="MapPin" size={15} className="text-[#1a3a6b]" />
                Адрес
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Местонахождение</p>
                  <p className="text-base font-medium text-gray-900 leading-snug">
                    г. Екатеринбург,<br />ул. Заводская, д. 29
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Режим работы</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Пн — Пт</span>
                      <span className="font-medium text-gray-900">07:30 – 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота</span>
                      <span className="font-medium text-gray-900">08:00 – 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье</span>
                      <span className="font-medium text-gray-400">Выходной</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-10">
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-sm text-gray-400">
            ЦГКБ №3 · Муниципальное учреждение здравоохранения
          </p>
          <p className="text-sm text-gray-400">
            Все права защищены © 2024
          </p>
        </div>
      </footer>

    </div>
  );
}
