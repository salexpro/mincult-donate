import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import cn from 'classnames'
import MiddleEllipsis from 'react-middle-ellipsis'
import { useTranslation } from 'react-i18next'

import Icon from '../Icon'

import DATA from './constants'
import psys from './img/payment_systems.svg'

import * as s from './Donate.module.scss'

const DonateModal = (props) => {
  const { cards, crypto, bank } = DATA

  const { t } = useTranslation('donate')

  const [copied, setCopied] = useState(null)

  const handleCopy = (data) => {
    // if (!copied) {
    navigator.clipboard.writeText(data?.wallet).then(
      () => {
        setCopied(data)

        setTimeout(() => {
          setCopied(false)
        }, 3000)
      },
      () => {
        alert('Error occured')
      }
    )
    // }
  }

  const [activeCurr, setActiveCurr] = useState(bank.currs[0].account)

  const handleCurr = (wallet) => setActiveCurr(wallet)

  return (
    <Modal {...props} fullscreen="md-down" restoreFocus={false} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h2">{t('header')}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={s.donate}>
        <div className={s.donate__cards}>
          <h3>{t('cards')}</h3>
          <div className={s.donate__buttons}>
            {cards.currs.map(({ symbol, link }) => (
              <Button
                href={link}
                target="_blank"
                variant="secondary"
                key={symbol}
              >
                {symbol}
              </Button>
            ))}
          </div>
          <img
            src={psys}
            alt="Visa | Mastercard | Простір | Google Pay | Apple Pay"
          />
        </div>
        <div className={s.donate__crypto}>
          <h3>{t('crypto')}</h3>
          <ul className={s.tokens}>
            {crypto.currs.map((curr) => {
              const { token, type, wallet } = curr
              return (
                <li className={s.token} key={token + type}>
                  <span className={s.token__symbol}>
                    <Icon name={token} />
                    <span>
                      {token} {type && `(${type})`}
                    </span>
                  </span>
                  <span className={s.token__wallet}>
                    <MiddleEllipsis>
                      <span>{wallet}</span>
                    </MiddleEllipsis>
                  </span>
                  <button
                    type="button"
                    className={s.copy}
                    onClick={() => handleCopy(curr)}
                  >
                    <Icon name={copied === curr ? 'check' : 'copy'} />
                    <span>{t('copy')}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={s.donate__bank}>
          <h3>{t('bank')}</h3>
          <div className={s.tabs}>
            <ul className={s.tabs__buttons}>
              {bank.currs.map(({ symbol, size, label, account }) => (
                <li key={symbol}>
                  <button
                    className={cn(s.tabs__button, {
                      [s.active]: activeCurr === account,
                    })}
                    type="button"
                    onClick={() => handleCurr(account)}
                  >
                    <Icon name={symbol} size={size} />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className={s.tabs__content}>{activeCurr}</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default DonateModal
