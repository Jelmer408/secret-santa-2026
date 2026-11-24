import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import NotebookPage from './NotebookPage'
import WishItem from './WishItem'
import WishForm from './WishForm'
import { api } from '../../lib/api'
import { wait } from '../../lib/dates'
import { useToast } from '../../context/toast'
import { MAX_WISHES } from '../../config'
import './WishEditor.css'

export default function WishEditor({ token, wishes, onChange }) {
  const toast = useToast()
  const [adding, setAdding] = useState(false)
  const [removingId, setRemovingId] = useState(null)

  const add = async (body, link) => {
    setAdding(true)
    try {
      onChange(await api.addWish(token, body, link))
      return true
    } catch (err) {
      toast(err.message, 'error')
      return false
    } finally {
      setAdding(false)
    }
  }

  const remove = async (wishId) => {
    setRemovingId(wishId)
    try {
      const [next] = await Promise.all([api.removeWish(token, wishId), wait(420)])
      onChange(next)
    } catch (err) {
      toast(err.message, 'error')
    } finally {
      setRemovingId(null)
    }
  }

  return (
    <NotebookPage
      className="wish-editor"
      title="My wishlist"
      subtitle={wishes.length ? `${wishes.length}/${MAX_WISHES} wishes` : 'Help your Santa out. They’re nervous.'}
    >
      <ul className="wish-editor__list">
        <AnimatePresence initial={false}>
          {wishes.map((wish, i) => (
            <WishItem
              key={wish.id}
              wish={wish}
              index={i}
              removing={removingId === wish.id}
              onRemove={() => remove(wish.id)}
            />
          ))}
        </AnimatePresence>
      </ul>

      {wishes.length < MAX_WISHES
        ? <WishForm onAdd={add} busy={adding} />
        : <p className="notebook__empty">That’s a full sleigh! Remove one to add another.</p>}
    </NotebookPage>
  )
}
