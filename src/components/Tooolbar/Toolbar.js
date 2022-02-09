import { Selectors } from '../Misc/Icons'
import { AvailableLabels } from '../Misc/Const'

import { UnreadMessageCount } from './UnreadMessageCount'
import { Selector } from './Selector'
import { MarkRead } from './MarkRead'
import { MarkUnread } from './MarkUnread'
import { DropDown } from './DropDown'
import { RemoveMessages } from './RemoveMessages'

export const Toolbar = ({ data, setData }) => {

    const countUnread = () => Array.isArray(data) ? data.filter(d => !d.read).length : 0

    const countSelected = () => Array.isArray(data) ? data.filter(d => d.selected === true).length : 0

    const countTotal = () => Array.isArray(data) ? data.length : 0

    const isDisabled = () => countSelected() === 0

    const celectorIcon = () => {
        let numSelected = countSelected()
        let none = numSelected === 0
        let all = numSelected === countTotal() && !none
        return all ? Selectors.All :
            none ? Selectors.None : Selectors.Some
    }

    const selectorHandler = () => {
        const select = countTotal() !== countSelected()
        setData([ ...data.map(msg => ({...msg, selected: select }))])
    }

    const markReadHandler = () => {
        setData([ ...data.map(msg => !msg.selected ? msg : { ...msg, read: true } ) ])
    }

    const markUnreadHandler = () => {
        setData([ ...data.map(msg => !msg.selected ? msg : { ...msg, read: false } ) ])
    }

    const deletionHandler = () => {
        setData([ ...data.filter(msg => !msg.selected) ])
    }

    const addLabelHandler = ({ target: { value }}) => {
        setData([ ...data.map(msg => !msg.selected ? msg : ({ ...msg, labels: [ ...msg.labels.filter(label => label !== value), value]}))])
    }

    const removeLabelHandler = ({ target: { value }}) => {
        setData([ ...data.map(msg => !msg.selected ? msg : ({ ...msg, labels: msg.labels.filter(label => label !== value)}))])
    }

    return (
        <div className="row toolbar">
            <UnreadMessageCount count={countUnread()} />
            <Selector icon={celectorIcon()} onClick={selectorHandler} />
            <MarkRead disabled={isDisabled()} onClick={markReadHandler} />
            <MarkUnread disabled={isDisabled()} onClick={markUnreadHandler} />
            <DropDown disabled={isDisabled()} title="Add Label" labels={AvailableLabels} onChange={addLabelHandler} />
            <DropDown disabled={isDisabled()} title="Remove Label" labels={AvailableLabels} onChange={removeLabelHandler} />
            <RemoveMessages disabled={isDisabled()} onClick={deletionHandler} />
        </div>
    )
}