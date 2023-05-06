import React from "react";
import "./SideBarBank.css";
import { Bank } from "../icons/Bank";
import { CardToCard } from "../icons/bank/CardToCard";
import { Charge } from "../icons/bank/Charge";
import { Internet } from "../icons/bank/Internet";
import { Management } from "../icons/bank/Management";
import { Notices } from "../icons/bank/Notices";
import { TurnTaker } from "../icons/bank/TurnTaker";
import { AgreedCurrency } from "../icons/bank/AgreedCurrency";
import { Maskan } from "../icons/bank/Maskan";
import { Bills } from "../icons/bank/Bills";
import { Bill } from "../icons/bank/Bill";
import { Transaction } from "../icons/bank/Transaction";
import { Cash } from "../icons/bank/Cash";
import { Charity } from "../icons/bank/Charity";
import { BaleClub } from "../icons/bank/BaleClub";
import { Baje } from "../icons/bank/Baje";
import { Kindness } from "../icons/bank/Kindness";

const SideBarBank = () => {
  return (
    <div className="sidebar-bank">
      <div className="sidebar-bank-logo-container">
        {/* <div className="sidebar-bank-logo">
          <Bank size={24} />
        </div> */}
        <img
          src="../icons/card.svg"
          width="24"
          height="24"
          class="sidebar-bank-logo"
        ></img>
        <p className="sidebar-bank-tag">خدمات بانکی بله</p>
      </div>
      <div className="sidebar-bank-melli-container">
        <img src="icons/bank_meli_colored.png" />
        <div className="sidebar-bank-wallet-container">
          <p className="sidebar-bank-wallet sidebar-bank-wallet-global">
            کیف پول ملی
          </p>
          <p className="sidebar-bank-wallet-reload-container sidebar-bank-wallet-global">
            <div className="sidebar-bank-wallet-reload">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.09961 12C4.09961 6.891 8.24061 2.75 13.3496 2.75C18.4586 2.75 22.5996 6.891 22.5996 12C22.5996 17.109 18.4586 21.25 13.3496 21.25C10.53 21.25 8.00521 19.9887 6.30864 17.9995"
                  stroke="#238FF3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M7.11778 9.80469L4.24932 12.568L1.38086 9.80469"
                  stroke="#238FF3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </p>
        </div>
      </div>
      <div className="sidebar-bank-sub-container">
        <div className="sidebar-bank-tag-container">
          <p className="sidebar-bank-tag">خدمات پرکاربرد</p>
        </div>
        <div className="sidebar-bank-menu-container">
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <CardToCard size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">کارت به کارت</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Charge size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">شارژ</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Internet size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">بسته اینترنت</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-bank-sub-container">
        <div className="sidebar-bank-tag-container">
          <p className="sidebar-bank-tag">خدمات بانکی</p>
        </div>
        <div className="sidebar-bank-menu-container">
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Management size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">مدیریت مالی</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Notices size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">
                اطلاع رسانی بانک ملّی
              </p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <TurnTaker size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">نوبت گیر</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <AgreedCurrency size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">ارز توافقی</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-bank-sub-container">
        <div className="sidebar-bank-tag-container">
          <p className="sidebar-bank-tag">سایر خدمات</p>
        </div>
        <div className="sidebar-bank-menu-container sidebar-bank-menu-container-last">
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Maskan size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">تسهیلات مسکن</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Bills size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">
                صورت حساب
              </p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Bill size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">قبض</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Transaction size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">تراکنش ها</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Cash size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">موجودی کارت</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Charity size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">نیکوکاری</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <BaleClub size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">باشگاه بله</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Baje size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">باجه</p>
            </div>
          </div>
          <div className="sidebar-bank-menu-item-container">
            <div className="sidebar-bank-menu-item">
              <div className="sidebar-bank-menu-item-icon">
                <Kindness size={36} />
              </div>
              <p className="sidebar-bank-menu-item-tag">دایره ی مهربانی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarBank;
