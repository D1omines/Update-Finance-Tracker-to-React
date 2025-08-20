import telegramIcon from "/public/telegram-ico.svg";
import whatsappIcon from "/public/whatsapp-ico.svg";
import githubIcon from "/public/github-ico.svg";

export default function Footer() {
  return (
    <footer className="h-20 bg-stone-800 flex px-10 text-white mt-5 items-center justify-between">
      <div>
        <p>Автор: Денис Вольнов</p>
      </div>
      <div>
        <p>
          По всем вопросам и предложениям по улучшению приложения, можно
          написать в соц. сетях
        </p>
      </div>
      <div className="flex gap-5">
        <a href="https://t.me/DensVolnov" target="_blank">
          <img className="w-12" src={telegramIcon} alt="telegram icon" />
        </a>
        <a href="https://wa.me/79032227110" target="_blank">
          <img className="w-12" src={whatsappIcon} alt="whatsapp icon" />
        </a>
        <a href="https://github.com/D1omines" target="_blank">
          <img className="w-12" src={githubIcon} alt="github icon" />
        </a>
      </div>
    </footer>
  );
}
