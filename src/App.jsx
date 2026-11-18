import { useEffect, useRef, useState } from 'react'
import './styles/tokens.css'
import './styles/global.css'
import './styles/components.css'
import { festivalStages, leaderboardEvents, participants, teamStandings } from './data/demoData'

const heroStages = [
  {
    day: 'DAY 01',
    navDay: 'Live · Day 01',
    number: '01',
    subtitle: 'Opening · Round 1',
    telemetry: 'Round 1 of 3 · Completed',
    event: 'Inaugural Keynote',
    eventMeta: 'Main Auditorium · 10:30',
    update: 'All Stage 01 delegate credentials verified and archived.',
  },
  {
    day: 'DAY 02',
    navDay: 'Live · Day 02',
    number: '02',
    subtitle: 'Prelims · Round 2',
    telemetry: 'Round 2 of 3 · Active',
    event: 'Policy Pitch',
    eventMeta: 'Main Auditorium · 09:30',
    update: 'Team presentations begin after the lunch interval.',
  },
  {
    day: 'DAY 03',
    navDay: 'Live · Day 03',
    number: '03',
    subtitle: 'Grand Finals · Round 3',
    telemetry: 'Round 3 of 3 · Scheduled',
    event: 'Championship Debate',
    eventMeta: 'Main Auditorium · 12:00',
    update: 'Finalists list publishes tonight at 19:00 IST.',
  },
]

const festivalUpdates = [
  'Team presentations begin after the lunch interval.',
  'Policy Pitch adjudication sheets close in 20 minutes.',
  'Constitutional Quiz teams report to Seminar Hall 1 by 10:50.',
]
const footerNavigation = [
  ['Overview', 'overview'],
  ['Events & Stages', 'events'],
  ['Participant Directory', 'participant-directory'],
  ['Leaderboard', 'leaderboard'],
]

function Brand({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#overview" aria-label="POLARTS home">
      <img className="brand-mark" src={`${import.meta.env.BASE_URL}logo/polarts-logo.jpeg`} alt="" />
      <span className="brand-copy"><strong>POLARTS</strong><small>Department of Political Science</small></span>
    </a>
  )
}

function Header({ onOpenModal, stageIndex }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand-group">
          <Brand compact />
          <span className="edition-pill">2026</span>
        </div>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
          <span /><span /><span /><span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-nav" className={open ? 'primary-nav primary-nav--open' : 'primary-nav'} aria-label="Primary navigation">
          <a className="active" href="#overview" onClick={() => setOpen(false)}>Overview</a>
          <button type="button" onClick={() => { onOpenModal('events'); setOpen(false) }}>Events &amp; Stages</button>
          <button type="button" onClick={() => { onOpenModal('directory'); setOpen(false) }}>Participant Directory</button>
          <button type="button" onClick={() => { onOpenModal('leaderboard'); setOpen(false) }}>Leaderboard</button>
        </nav>
        <div className="header-actions">
          <span className="nav-live-pill"><i /> <span>{heroStages[stageIndex].navDay}</span></span>
          <button className="quick-search-button" type="button" onClick={() => onOpenModal('directory')} title="Quick Participant Lookup">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4.5 4.5"/></svg>
            <span>Quick Search</span><kbd>⌘K</kbd>
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero({ onOpenModal, stageIndex, setStageIndex }) {
  const [updateIndex, setUpdateIndex] = useState(0)
  const stage = heroStages[stageIndex]

  function cycleStage(delta) {
    setStageIndex((index) => (index + delta + heroStages.length) % heroStages.length)
    setUpdateIndex((index) => (index + 1) % festivalUpdates.length)
  }

  return (
    <section className="hero" id="overview">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Department edition · 2026</p>
        <h1>Ideas take the stage.<br /><em>Leadership follows.</em></h1>
        <p className="hero-description">POLARTS brings debate, policy and political imagination together in one dynamic festival of participation.</p>
        <div className="hero-actions">
          <button className="button button--primary" type="button" onClick={() => onOpenModal('leaderboard')}>Explore Leaderboard <span>↗</span></button>
          <button className="button button--secondary" type="button" onClick={() => onOpenModal('events')}>Explore Events</button>
        </div>
        <div className="hero-metrics" aria-label="Festival highlights">
          <div><i className="metric-calendar" aria-hidden="true">▦</i><strong>12+ <span>Events</span></strong></div>
          <i className="metric-divider" aria-hidden="true" />
          <div><i className="metric-users" aria-hidden="true">♧</i><strong>240+ <span>Participants</span></strong></div>
          <i className="metric-divider metric-divider--optional" aria-hidden="true" />
          <div className="metric-live"><i /><strong>Live <span>Scoring</span></strong></div>
        </div>
      </div>
      <div className="festival-panel" aria-label="Festival overview">
        <div className="panel-topline">
          <span className="live-indicator"><i /> Festival in progress</span>
          <div className="hero-stage-switcher">
            <button type="button" aria-label="Previous festival stage" onClick={() => cycleStage(-1)}>‹</button>
            <button type="button" onClick={() => cycleStage(1)}>{stage.day}</button>
            <button type="button" aria-label="Next festival stage" onClick={() => cycleStage(1)}>›</button>
          </div>
        </div>
        <div className="panel-main">
          <div className="panel-stage">
            <small>Current stage</small><strong>Stage<br />{stage.number}</strong><span>{stage.subtitle}</span>
            <em className="panel-telemetry"><i />{stage.telemetry}</em>
          </div>
          <div className="panel-art">
            <img src={`${import.meta.env.BASE_URL}logo/polarts-logo-transparent.png`} alt="" />
          </div>
        </div>
        <button className="panel-event" type="button" onClick={() => onOpenModal('events')}>
          <small><i /> Now happening</small><strong>{stage.event}</strong><span>{stage.eventMeta}</span><b>→</b>
        </button>
        <div className="panel-update">
          <span className="update-icon">i</span>
          <div><small>Festival update</small><p>{updateIndex === 0 ? stage.update : festivalUpdates[updateIndex]}</p></div>
          <button type="button" aria-label="Next festival update" onClick={() => setUpdateIndex((index) => (index + 1) % festivalUpdates.length)}>↻</button>
        </div>
      </div>
    </section>
  )
}

function ParticipantSearch() {
  const [query, setQuery] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const [status, setStatus] = useState('All Roster')
  const [federation, setFederation] = useState('All')
  const [rating, setRating] = useState('Any')
  const participantDetails = [
    ['India', '2783 ELO', 'Active'],
    ['India', '2678 ELO', 'Active'],
    ['United States', '2602 ELO', 'Active'],
    ['Uzbekistan', '2498 ELO', 'Active'],
    ['France', '2763 ELO', 'Active'],
    ['India', '2431 ELO', 'Active'],
    ['Germany', '2045 ELO', 'Provisional'],
    ['India', '1742 ELO', 'Active'],
  ]
  const roster = participants.slice(0, 8).map((person, index) => ({
    ...person,
    federation: participantDetails[index][0],
    rating: participantDetails[index][1],
    status: participantDetails[index][2],
  }))
  const results = (() => {
    const normalized = query.trim().toLowerCase()
    return roster.filter((person) => {
      const matchesQuery = !normalized ||
        person.name.toLowerCase().includes(normalized) ||
        person.chessNumber.toLowerCase().includes(normalized)
      const matchesStatus = status === 'All Roster' || person.status === status
      const matchesFederation = federation === 'All' || person.federation === federation
      const ratingValue = Number(person.rating.split(' ')[0])
      const matchesRating = rating === 'Any' ||
        (rating === '2500+' && ratingValue >= 2500) ||
        (rating === '2000+' && ratingValue >= 2000)
      return matchesQuery && matchesStatus && matchesFederation && matchesRating
    })
  })()
  const showRoster = searchFocused && query.trim().length > 0

  function initials(name) {
    return name.split(' ').map((word) => word[0]).join('')
  }

  return (
    <section className="participant-search" id="participant-directory" aria-label="Participant search">
      <div className="directory-search-card">
        <div className="directory-heading">
          <div><p>Participant directory</p><h2>Find a participant</h2><span>Look up registered players, rankings, and federation IDs across active tournaments.</span></div>
          <small className="demo-record-badge"><i /> Demo records</small>
        </div>
        <div className="directory-toolbar">
          <label className="directory-search-input">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder="Search by name or permanent chess number"
              aria-label="Search participants"
              aria-expanded={showRoster}
              aria-controls="registered-roster"
            />
          </label>
          <label className="directory-select"><select value={federation} onChange={(event) => setFederation(event.target.value)} aria-label="Federation filter"><option value="All">Federation: All</option><option>India</option><option>United States</option><option>Uzbekistan</option><option>France</option><option>Germany</option></select></label>
          <label className="directory-select"><select value={rating} onChange={(event) => setRating(event.target.value)} aria-label="Rating filter"><option value="Any">Rating: Any</option><option value="2500+">2500+</option><option value="2000+">2000+</option></select></label>
          <button className="directory-search-button" type="button">Search</button>
        </div>
        <div className="directory-status-row">
          <span>Status:</span>
          {['All Roster', 'Active', 'Provisional', 'Try:', 'PCN-405281'].map((item) => (
            item === 'Try:' || item === 'PCN-405281'
              ? <button className={item === 'PCN-405281' ? 'directory-code' : 'directory-meta'} type="button" key={item} onClick={() => item === 'PCN-405281' && setQuery('PC-')}>{item}</button>
              : <button className={status === item ? 'active' : ''} type="button" key={item} onClick={() => setStatus(item)}>{item}</button>
          ))}
          <small>Showing {results.length} of {roster.length} participants</small>
        </div>
      </div>
      {showRoster && <div className="registered-roster" id="registered-roster">
        <div className="roster-heading"><strong>Registered roster</strong><span>Click any permanent chess number to copy ID</span></div>
        <div className="roster-table-wrap">
          <table className="roster-table"><thead><tr><th>Participant</th><th>Permanent chess no.</th><th>Federation</th><th>Standard rating</th><th>Status</th></tr></thead><tbody>
            {results.map((person) => (
              <tr key={person.chessNumber}>
                <td><div className="roster-person"><span className="roster-avatar">{initials(person.name)}</span><div><strong>{person.name}</strong><small>{person.event}</small></div></div></td>
                <td><button className="roster-id" type="button" onClick={() => navigator.clipboard?.writeText(person.chessNumber)}>{person.chessNumber} <span>▣</span></button></td>
                <td><div className="federation-cell"><b>{person.federation === 'United States' ? 'USA' : person.federation === 'Uzbekistan' ? 'UZB' : person.federation === 'Germany' ? 'GER' : person.federation === 'France' ? 'FRA' : 'IND'}</b><span>{person.federation}</span></div></td>
                <td><strong className="rating-value">{person.rating.split(' ')[0]}</strong><span className="rating-unit"> {person.rating.split(' ')[1]}</span></td>
                <td><span className={`roster-status ${person.status.toLowerCase()}`}><i />{person.status}</span></td>
              </tr>
            ))}
          </tbody></table>
          {!results.length && <div className="empty-state">No participants match the selected filters.</div>}
        </div>
      </div>}
    </section>
  )
}

function Leaderboard() {
  const eventKeys = Object.keys(leaderboardEvents)
  const initialEvent = new URLSearchParams(window.location.search).get('event')
  const [eventKey, setEventKey] = useState(() => eventKeys.includes(initialEvent) ? initialEvent : eventKeys[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortDirection, setSortDirection] = useState('desc')
  const [page, setPage] = useState(0)
  const [activeParticipant, setActiveParticipant] = useState(null)
  const [activeModal, setActiveModal] = useState(null)
  const [toast, setToast] = useState('')
  const searchRef = useRef(null)
  const modalCloseRef = useRef(null)
  const previousModalFocusRef = useRef(null)
  const toastTimerRef = useRef(null)
  const pageSize = 5
  const eventData = leaderboardEvents[eventKey]
  const eventRows = eventData.participants
  const average = (eventRows.reduce((sum, person) => sum + person.marks, 0) / eventRows.length).toFixed(1)
  const topParticipant = eventRows.reduce((top, person) => person.marks > top.marks ? person : top, eventRows[0])
  const filterCounts = {
    all: eventRows.length,
    podium: eventRows.filter((person) => person.rank <= 3).length,
    qualified: eventRows.filter((person) => person.qualified).length,
  }
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filtered = eventRows.filter((person) => {
    const matchesSearch = !normalizedQuery ||
      person.name.toLowerCase().includes(normalizedQuery) ||
      person.chessNumber.toLowerCase().includes(normalizedQuery)
    const matchesFilter = activeFilter === 'all' ||
      (activeFilter === 'podium' && person.rank <= 3) ||
      (activeFilter === 'qualified' && person.qualified)
    return matchesSearch && matchesFilter
  }).sort((a, b) => sortDirection === 'desc' ? b.marks - a.marks : a.marks - b.marks)
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pageCount - 1)
  const visibleRows = filtered.slice(currentPage * pageSize, (currentPage + 1) * pageSize)
  const shareUrl = new URL(window.location.href)
  shareUrl.searchParams.set('event', eventKey)
  shareUrl.hash = 'leaderboard'

  function showToast(message) {
    setToast(message)
    window.clearTimeout(toastTimerRef.current)
    toastTimerRef.current = window.setTimeout(() => setToast(''), 2600)
  }

  async function copyText(text, successMessage) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const temporaryInput = document.createElement('textarea')
        temporaryInput.value = text
        temporaryInput.style.position = 'fixed'
        temporaryInput.style.opacity = '0'
        document.body.append(temporaryInput)
        temporaryInput.select()
        const copied = document.execCommand('copy')
        temporaryInput.remove()
        if (!copied) throw new Error('Clipboard copy was not permitted.')
      }
      showToast(successMessage)
    } catch {
      showToast(`Could not access the clipboard. Copy this value manually: ${text}`)
    }
  }

  function openModal(modal, participant = null) {
    previousModalFocusRef.current = document.activeElement
    setActiveParticipant(participant)
    setActiveModal(modal)
  }

  function closeModal() {
    setActiveModal(null)
    setActiveParticipant(null)
  }

  function exportCsv() {
    const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`
    const rows = [
      ['Rank', 'Chess Number', 'Participant', 'Standing', 'Marks'],
      ...filtered.map((person) => [String(person.rank).padStart(2, '0'), person.chessNumber, person.name, person.qualified ? 'Qualified' : 'Finalist', person.marks]),
    ]
    const csv = rows.map((row) => row.map(escapeCsv).join(',')).join('\r\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url
    link.download = `${eventKey}-leaderboard.csv`
    document.body.append(link)
    link.click()
    link.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    showToast(`Exported ${filtered.length} ${filtered.length === 1 ? 'result' : 'results'} for ${eventData.title}.`)
  }

  function selectEvent(nextEventKey) {
    setEventKey(nextEventKey)
    setSearchQuery('')
    setActiveFilter('all')
    setSortDirection('desc')
    setPage(0)
    setActiveModal(null)
    setActiveParticipant(null)
    showToast(`Switched to ${leaderboardEvents[nextEventKey].title}.`)
  }

  function initials(name) {
    return name.split(' ').map((part) => part[0]).join('')
  }

  useEffect(() => {
    function handleShortcut(event) {
      const target = event.target
      const isTyping = target instanceof HTMLElement &&
        (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName))
      if (event.key === '/' && !isTyping && !activeModal) {
        event.preventDefault()
        searchRef.current?.focus()
      }
      if (event.key === 'Escape' && activeModal) closeModal()
    }
    document.addEventListener('keydown', handleShortcut)
    return () => document.removeEventListener('keydown', handleShortcut)
  }, [activeModal])

  useEffect(() => () => window.clearTimeout(toastTimerRef.current), [])

  useEffect(() => {
    if (!activeModal) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    modalCloseRef.current?.focus()
    function trapFocus(event) {
      if (event.key !== 'Tab') return
      const modal = document.querySelector('.results-dialog')
      const focusable = modal?.querySelectorAll('button:not(:disabled),input:not([readonly]),a[href]')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', trapFocus)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', trapFocus)
      previousModalFocusRef.current?.focus?.()
    }
  }, [activeModal])

  return (
    <section className="section leaderboard-section results-page" id="leaderboard">
      <nav className="results-breadcrumb" aria-label="Breadcrumb"><a href="#events">Events</a><b>/</b><a href="#leaderboard">Results</a><b>/</b><strong>{eventData.title}</strong></nav>
      <div className="results-header">
        <div className="results-title"><h2>{eventData.title} Leaderboard</h2><span className="published-badge results-demo-badge"><i />Illustrative</span><time dateTime="2026-11-18">Updated {eventData.updated}</time></div>
        <div className="results-actions">
          <button type="button" onClick={exportCsv}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 17v3h14v-3"/></svg><span>Export CSV</span></button>
          <button className="share-button" type="button" onClick={() => openModal('share')}><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m9 10.5 6-4m-6 7 6 4"/></svg><span>Share Results</span></button>
        </div>
      </div>
      <div className="results-summary" aria-label="Leaderboard summary metrics">
        <article><span className="summary-icon">♙</span><div><small>Total Participants</small><strong>{eventRows.length}</strong><span className="summary-caption">{eventRows.length} scorecards available</span></div></article>
        <article><span className="summary-icon summary-icon--bars"><i/><i/><i/></span><div><small>Average Score</small><strong>{average}</strong><span className="summary-caption">Out of 100 points</span></div></article>
        <article><span className="summary-icon">♕</span><div><small>Top Score</small><strong>{topParticipant.marks}<small className="summary-outof">/ 100</small></strong><span className="summary-caption">{topParticipant.name} · {topParticipant.chessNumber}</span></div></article>
      </div>
      <div className="results-panel">
        <div className="leaderboard-toolbar">
          <div className="leaderboard-controls">
            <label className="event-select"><span className="sr-only">Select event</span><select value={eventKey} onChange={(event) => selectEvent(event.target.value)}>{eventKeys.map((key) => <option value={key} key={key}>{leaderboardEvents[key].title}</option>)}</select><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg></label>
            <label className="participant-filter"><span className="sr-only">Filter by name or chess number</span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg><input ref={searchRef} value={searchQuery} onChange={(event) => { setSearchQuery(event.target.value); setPage(0) }} placeholder="Filter by name or chess ID..." aria-label="Filter by name or chess number"/>{searchQuery ? <button type="button" onClick={() => { setSearchQuery(''); setPage(0); searchRef.current?.focus() }}>Clear</button> : <kbd>/</kbd>}</label>
          </div>
          <div className="rank-tabs" role="group" aria-label="Rank filters">
            {[['all', 'All Ranks'], ['podium', 'Top 3 Podium'], ['qualified', 'Qualified']].map(([filter, label]) => (
              <button className={activeFilter === filter ? 'active' : ''} type="button" key={filter} aria-pressed={activeFilter === filter} onClick={() => { setActiveFilter(filter); setPage(0) }}><span>{label}</span><b>{filterCounts[filter]}</b></button>
            ))}
          </div>
        </div>
        <div className="table-wrap results-table-wrap">
          <table className="results-table"><thead><tr><th>Rank</th><th>Chess Number</th><th>Participant</th><th className="standing-column">Standing</th><th><button className="sort-marks-button" type="button" aria-label={`Sort by marks, currently ${sortDirection === 'desc' ? 'highest first' : 'lowest first'}`} onClick={() => setSortDirection((direction) => direction === 'desc' ? 'asc' : 'desc')}>Marks <svg className={sortDirection === 'asc' ? 'ascending' : ''} viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg></button></th></tr></thead>
            <tbody key={`${eventKey}-${activeFilter}-${searchQuery}-${sortDirection}`}>
              {visibleRows.map((person, index) => (
                <tr className={`participant-row rank-${person.rank}`} key={person.chessNumber} tabIndex={0} aria-label={`Inspect ${person.name} scorecard`} style={{ '--row-delay': `${index * 55}ms` }} onClick={() => openModal('scorecard', person)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openModal('scorecard', person) } }}>
                  <td>{person.rank <= 3 ? <span className={`rank-badge rank-badge--${person.rank}`}>{String(person.rank).padStart(2, '0')}</span> : <span className="rank-number">{String(person.rank).padStart(2, '0')}</span>}</td>
                  <td><span className="chess-number">{person.chessNumber}</span></td>
                  <td><div className="participant-cell"><span className={`participant-avatar participant-avatar--${person.rank}`}>{person.initials || initials(person.name)}</span><strong>{person.name}</strong></div></td>
                  <td className="standing-column">{person.qualified ? <span className="standing-badge standing-badge--qualified"><i/>Qualified{person.rank <= 3 ? ` · #${person.rank}` : ''}</span> : <span className="standing-badge standing-badge--finalist">Finalist</span>}</td>
                  <td><div className="marks-cell"><strong className="marks">{person.marks}</strong><span className="mark-bar"><i style={{ width: `${person.marks}%` }}/></span><button type="button" className="row-menu" aria-label={`Inspect ${person.name} scorecard`} onClick={(event) => { event.stopPropagation(); openModal('scorecard', person) }}>⋮</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
          {!filtered.length && <div className="results-empty"><span>⌕</span><h3>No matching participants found</h3><p>Try clearing the search or switching back to all ranks.</p><button type="button" onClick={() => { setSearchQuery(''); setActiveFilter('all'); setPage(0); searchRef.current?.focus() }}>Reset Filters</button></div>}
        </div>
        <div className="table-footer"><span>{filtered.length ? `Showing ${currentPage * pageSize + 1}–${Math.min((currentPage + 1) * pageSize, filtered.length)} of ${filtered.length} matching participants` : `Showing 0 of ${eventRows.length} participants`}</span><div><small>Choose a row to inspect its judge scorecard</small><button type="button" disabled={currentPage === 0} onClick={() => setPage(currentPage - 1)}>Previous</button><button type="button" disabled={currentPage >= pageCount - 1} onClick={() => setPage(currentPage + 1)}>Next</button></div></div>
      </div>
      {activeModal && (
        <div className="results-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal() }}>
          {activeModal === 'scorecard' && activeParticipant ? (
            <section className="results-dialog scorecard-dialog" role="dialog" aria-modal="true" aria-labelledby="scorecard-title">
              <header className="scorecard-header"><div className="scorecard-person"><span className={`participant-avatar participant-avatar--${activeParticipant.rank}`}>{activeParticipant.initials || initials(activeParticipant.name)}</span><div><div><h3 id="scorecard-title">{activeParticipant.name}</h3><span className={`scorecard-rank scorecard-rank--${activeParticipant.rank}`}>Rank #{String(activeParticipant.rank).padStart(2, '0')}</span></div><small>{activeParticipant.chessNumber} · {eventData.title}</small></div></div><button ref={modalCloseRef} type="button" aria-label="Close scorecard" onClick={closeModal}>×</button></header>
              <div className="scorecard-total"><div><small>Composite Judge Score</small><strong>{activeParticipant.qualified ? 'Qualified · Meets 80+ cutoff' : 'Completed · Participated'}</strong></div><b>{activeParticipant.marks}<small>/ 100</small></b></div>
              <div className="scorecard-criteria">{activeParticipant.breakdown.map((criterion) => <article key={criterion.label}><div><span>{criterion.label}</span><strong>{criterion.score}<small> / {criterion.max}</small></strong></div><div><i style={{ width: `${criterion.score / criterion.max * 100}%` }}/></div></article>)}</div>
              <footer><button type="button" onClick={() => copyText(activeParticipant.chessNumber, `Copied Chess ID ${activeParticipant.chessNumber}.`)}>Copy Chess ID</button><button type="button" onClick={closeModal}>Done</button></footer>
            </section>
          ) : (
            <section className="results-dialog share-dialog" role="dialog" aria-modal="true" aria-labelledby="share-dialog-title">
              <header><div><span>Results Link · Demo standings</span><h3 id="share-dialog-title">Share Leaderboard</h3></div><button ref={modalCloseRef} type="button" aria-label="Close share dialog" onClick={closeModal}>×</button></header>
              <p>This link points to the current site and opens the selected {eventData.title} leaderboard. Results shown here are illustrative demo data.</p>
              <div><input aria-label="Leaderboard share URL" readOnly value={shareUrl.href}/><button type="button" onClick={() => copyText(shareUrl.href, 'Leaderboard link copied.')}>Copy Link</button></div>
            </section>
          )}
        </div>
      )}
      {toast && <div className="results-toast" role="status" aria-live="polite"><i/>{toast}</div>}
    </section>
  )
}

function Events() {
  const [stages, setStages] = useState(() => festivalStages.map((stage) => ({
    ...stage,
    events: stage.events.map((event) => ({
      ...event,
      initiallyCompleted: event.status === 'COMPLETED',
    })),
  })))
  const [currentStage, setCurrentStage] = useState(1)
  const [statusFilter, setStatusFilter] = useState('ALL')
  const [expandedEvent, setExpandedEvent] = useState(null)
  const [toast, setToast] = useState('')

  const stage = stages[currentStage]
  const initialCompleted = stage.events.filter((event) => event.initiallyCompleted).length
  const currentCompleted = stage.events.filter((event) => event.status === 'COMPLETED').length
  const completed = Math.min(stage.totalEvents, Math.max(0, stage.baseCompleted + currentCompleted - initialCompleted))
  const percent = Math.round((completed / stage.totalEvents) * 100)
  const filteredEvents = stage.events.filter((event) => statusFilter === 'ALL' || event.status === statusFilter)
  const uniqueVenues = new Set(stage.events.map((event) => event.venue)).size

  function showToast(message) {
    setToast(message)
    window.clearTimeout(showToast.timer)
    showToast.timer = window.setTimeout(() => setToast(''), 2200)
  }

  function setStage(index) {
    if (index < 0 || index >= stages.length) return
    setCurrentStage(index)
    setExpandedEvent(null)
  }

  function cycleStage() {
    setStage((currentStage + 1) % stages.length)
  }

  function toggleCompletion(eventId) {
    setStages((currentStages) => currentStages.map((currentStageData, stageIndex) => {
      if (stageIndex !== currentStage) return currentStageData
      return {
        ...currentStageData,
        events: currentStageData.events.map((event) => {
          if (event.id !== eventId) return event
          if (event.status === 'COMPLETED') {
            const reopenedStatus = event.previousStatus || 'UPCOMING'
            showToast(`Marked "${event.title}" as ${reopenedStatus.toLowerCase()}`)
            return { ...event, status: reopenedStatus, initiallyCompleted: false }
          }
          showToast(`Completed "${event.title}"`)
          return { ...event, status: 'COMPLETED', previousStatus: event.status, initiallyCompleted: false }
        }),
      }
    }))
  }

  return (
    <section className="section events-section" id="events">
      <div className="programme-heading">
        <div><p>Festival programme</p><h2>Events &amp; stages</h2></div>
        <div className="stage-switcher" role="group" aria-label="Festival stage selector">
          <button type="button" aria-label="Previous stage" disabled={currentStage === 0} onClick={() => setStage(currentStage - 1)}>‹</button>
          <button type="button" title="Click to cycle stage" onClick={cycleStage}>Stage <strong>{stage.stageNumber}</strong> of 03</button>
          <button type="button" aria-label="Next stage" disabled={currentStage === stages.length - 1} onClick={() => setStage(currentStage + 1)}>›</button>
        </div>
      </div>
      <div className="programme-panel">
        <aside className="stage-summary">
          <div className="stage-ring" aria-hidden="true" />
          <div className="stage-summary-top">
            <div className="stage-summary-meta"><span>{stage.eyebrow}</span>{stage.isLive && <small><i /> Live track</small>}</div>
            <h3>{stage.title}</h3>
            <p>{stage.subtitle}</p>
            <div className="stage-progress-details"><span>Stage status: {completed} of {stage.totalEvents} events complete</span><strong>{percent}%</strong></div>
            <div className="stage-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={percent}><i style={{ width: `${percent}%` }} /></div>
          </div>
          <div className="stage-summary-bottom">
            <span>{stage.dateLabel}</span>
            <div className="stage-tabs" role="tablist" aria-label="Festival stages">
              {stages.map((item, index) => (
                <button type="button" role="tab" aria-selected={index === currentStage} className={index === currentStage ? 'active' : ''} key={item.stageNumber} onClick={() => setStage(index)}>
                  {item.stageNumber}. {index === 0 ? 'Opening' : index === 1 ? 'Prelims' : 'Finals'}
                </button>
              ))}
            </div>
          </div>
        </aside>
        <div className="schedule-panel">
          <div className="schedule-toolbar">
            <div className="schedule-filters" role="group" aria-label="Filter events by status">
              {['ALL', 'CURRENT', 'UPCOMING', 'COMPLETED'].map((filter) => (
                <button type="button" className={statusFilter === filter ? 'active' : ''} key={filter} onClick={() => setStatusFilter(filter)}>
                  {filter === 'ALL' ? 'All Events' : filter.charAt(0) + filter.slice(1).toLowerCase()}
                </button>
              ))}
            </div>
            <span>Select a session to inspect or update progress</span>
          </div>
          <div className="event-list">
            {filteredEvents.map((event) => {
              const expanded = expandedEvent === event.id
              return (
                <article className={`programme-event programme-event--${event.status.toLowerCase()}`} key={event.id}>
                  <button type="button" className="programme-event-row" aria-expanded={expanded} onClick={() => setExpandedEvent(expanded ? null : event.id)}>
                    <time>{event.time}</time><i className="programme-divider" />
                    <span className={`programme-number programme-number--${event.status.toLowerCase()}`}>{event.status === 'COMPLETED' ? '✓' : event.number}</span>
                    <span className={`programme-status programme-status--${event.status.toLowerCase()}`}>{event.status}</span>
                    <strong>{event.title}</strong>
                    <span className="programme-venue">{event.venue}<b>⌄</b></span>
                  </button>
                  {expanded && (
                    <div className="programme-drawer">
                      <div><p>{event.summary}</p><span><b>Chair:</b> {event.moderator} <i>•</i> <b>Duration:</b> {event.duration}</span></div>
                      <button type="button" onClick={(e) => { e.stopPropagation(); toggleCompletion(event.id) }}>
                        {event.status === 'COMPLETED' ? 'Reopen Event' : 'Mark Event Complete'}
                      </button>
                    </div>
                  )}
                </article>
              )
            })}
            {!filteredEvents.length && (
              <div className="programme-empty"><strong>No events in this status view</strong><span>Switch filter tabs to view scheduled sessions for this stage.</span><button type="button" onClick={() => setStatusFilter('ALL')}>Show all events</button></div>
            )}
          </div>
          <div className="programme-footer"><div><span><i className="in-progress" />In Progress</span><span><i />Scheduled</span><span><i className="completed" />Completed</span></div><strong>{uniqueVenues} active venues • IST (UTC+5:30)</strong></div>
        </div>
      </div>
      {toast && <div className="programme-toast" role="status"><i />{toast}</div>}
    </section>
  )
}

function Teams() {
  const [stageFilter, setStageFilter] = useState('ALL')
  const [viewMode, setViewMode] = useState('CARDS')
  const [selectedTeamId, setSelectedTeamId] = useState(null)
  const [isIllustrative, setIsIllustrative] = useState(true)
  const benchmark = stageFilter === 'ALL' ? 300 : stageFilter === 'STAGE_01' ? 135 : 180
  const scopeLabels = {
    ALL: 'Overall Standings (All Stages)',
    STAGE_01: 'Stage 01 · Opening & Prelims',
    STAGE_02: 'Stage 02 · Current Rounds',
  }
  const rankedTeams = teamStandings.map((team) => {
    const filteredEvents = stageFilter === 'ALL'
      ? team.events
      : team.events.filter((event) => event.stage === stageFilter)
    const highlightEvent = filteredEvents.find((event) => event.placement.startsWith('1st')) ?? filteredEvents[0]
    return {
      ...team,
      filteredEvents,
      highlightEvent,
      points: filteredEvents.reduce((total, event) => total + event.points, 0),
    }
  }).sort((a, b) => b.points - a.points).map((team, index, list) => ({
    ...team,
    rank: index + 1,
    gapToLeader: list[0].points - team.points,
    progress: Math.min(100, Math.round((team.points / benchmark) * 100)),
  }))
  const selectedTeam = rankedTeams.find((team) => team.id === selectedTeamId)
  const leaderMargin = rankedTeams[0].points - rankedTeams[1].points
  const columns = [
    ['Policy Pitch', 'Policy Pitch'],
    ['Const. Quiz', 'Constitutional Quiz'],
    ['Pol. Debate', 'Political Debate'],
    ['Mock Parl.', 'Campus Mock Parliament'],
    ['Plenary', 'Opening Plenary Brief'],
    ['Diplomacy', 'Diplomacy Desk'],
  ]

  return (
    <section className="section teams-section" id="teams">
      <div className="teams-heading">
        <div><p className="section-kicker">Overall team standings</p><h2>Team leaderboard</h2><p className="teams-subtitle">Cumulative points across prelims, policy pitch, and stage debates.</p></div>
        <div className="teams-controls">
          <div className="team-control-group" role="group" aria-label="Filter standings by stage">
            {[['ALL', 'All Stages'], ['STAGE_01', 'Stage 01'], ['STAGE_02', 'Stage 02']].map(([value, label]) => (
              <button type="button" className={stageFilter === value ? 'active' : ''} key={value} onClick={() => { setStageFilter(value); setSelectedTeamId(null) }}>{label}</button>
            ))}
          </div>
          <div className="team-control-group view-control" role="group" aria-label="Switch leaderboard layout">
            <button type="button" className={viewMode === 'CARDS' ? 'active' : ''} onClick={() => setViewMode('CARDS')}><span aria-hidden="true">▦</span>Cards</button>
            <button type="button" className={viewMode === 'TABLE' ? 'active' : ''} onClick={() => setViewMode('TABLE')}><span aria-hidden="true">☷</span>Breakdown Table</button>
          </div>
          <div className="illustrative-wrap">
            <button type="button" className={`illustrative-pill ${isIllustrative ? '' : 'sync-preview'}`} aria-pressed={isIllustrative} onClick={() => setIsIllustrative(!isIllustrative)}>
              <i />{isIllustrative ? 'Illustrative' : 'Sync Preview'}
            </button>
            <span className="illustrative-tooltip">{isIllustrative ? 'Illustrative standings: provisional cumulative scores for demonstration only.' : 'Sync preview mode: this frontend demo is not connected to a live adjudication feed.'}</span>
          </div>
        </div>
      </div>
      <div className="teams-summary">
        <span>Active scope: <strong>{scopeLabels[stageFilter]}</strong></span><i />
        <span>Target benchmark: <strong>{benchmark} pts</strong></span><i />
        <span className="leader-margin">Leader margin: <strong>+{leaderMargin} pts ahead of #2 ({rankedTeams[1].initials})</strong></span>
        <small>Click a team card to inspect its score breakdown</small>
      </div>
      {viewMode === 'CARDS' ? (
        <div className="team-grid team-grid--redesigned">
          {rankedTeams.map((team) => (
            <button type="button" className={`team-card team-card--redesigned team-card--${team.tone} ${selectedTeamId === team.id ? 'selected' : ''} ${team.rank === 1 ? 'team-card--leader' : ''}`} key={`${stageFilter}-${team.id}`} style={{ '--team-delay': `${(team.rank - 1) * 75}ms` }} aria-expanded={selectedTeamId === team.id} onClick={() => setSelectedTeamId(selectedTeamId === team.id ? null : team.id)}>
              <div className="team-card-content">
                <div className="team-card-top"><span className={`team-logo team-logo--${team.tone}`}>{team.initials}</span><span className="team-rank-area">{team.rank === 1 && <span className="team-lead-badge">♛ Lead</span>}<strong>{String(team.rank).padStart(2, '0')}</strong></span></div>
                <h3>{team.name}</h3>
                <div className="team-leaders"><small>Team leaders</small><span>{team.leaders.join(' · ')}</span></div>
                <div className="team-achievement"><span>{team.filteredEvents.length} events · {team.highlightEvent.placement.startsWith('1st') ? '1st' : team.highlightEvent.placement} in {team.highlightEvent.name}</span><small>{team.rank === 1 ? `+${leaderMargin} pts lead` : `-${team.gapToLeader} pts behind #1`}</small></div>
              </div>
              <div className="team-card-score"><div className="team-score-track"><i style={{ width: `${team.progress}%` }} /></div><div><span>{selectedTeamId === team.id ? 'Viewing breakdown' : 'View breakdown'} <b>→</b></span><strong>{team.points}<small> pts</small></strong></div></div>
            </button>
          ))}
        </div>
      ) : (
        <div className="team-matrix">
          <div className="team-matrix-header"><div><strong>Event Category Point Matrix</strong><small>Side-by-side breakdown across all scored festival events</small></div><span>{stageFilter === 'ALL' ? '6 Scored Fixtures' : `${rankedTeams[0].filteredEvents.length} Scored Fixtures`}</span></div>
          <div className="team-matrix-scroll"><table><thead><tr><th>Rank &amp; Team</th>{columns.map(([label]) => <th key={label}>{label}</th>)}<th>Total</th></tr></thead><tbody>
            {rankedTeams.map((team) => (
              <tr className={selectedTeamId === team.id ? 'selected' : ''} key={`${stageFilter}-${team.id}`} style={{ '--team-delay': `${(team.rank - 1) * 55}ms` }} onClick={() => setSelectedTeamId(selectedTeamId === team.id ? null : team.id)}>
                <td><div className="matrix-team"><b>{String(team.rank).padStart(2, '0')}</b><span className={`team-logo team-logo--${team.tone}`}>{team.initials}</span><span><strong>{team.name}</strong><small>{team.leaders.join(' · ')}</small></span></div></td>
                {columns.map(([label, eventName]) => {
                  const score = team.filteredEvents.find((event) => event.name === eventName)?.points
                  return <td key={label}>{score ?? '—'}</td>
                })}
                <td><strong>{team.points}</strong><small> pts</small></td>
              </tr>
            ))}
          </tbody></table></div>
        </div>
      )}
      {selectedTeam && (
        <div className="team-breakdown">
          <header className="breakdown-header">
            <div className="breakdown-team">
              <span className={`team-logo team-logo--${selectedTeam.tone}`}>{selectedTeam.initials}</span>
              <div><span className="breakdown-rank">Rank {String(selectedTeam.rank).padStart(2, '0')} <i /> {selectedTeam.eventSummary}</span><h3>{selectedTeam.name}</h3></div>
            </div>
            <div className="breakdown-score"><small>Cumulative score</small><strong>{selectedTeam.points}<span> points</span></strong></div>
            <button type="button" aria-label="Close score breakdown" onClick={() => setSelectedTeamId(null)}>×</button>
          </header>
          <div className="breakdown-body">
            <div className="breakdown-events">
              <div className="breakdown-subhead"><strong>Event-by-event point contributions</strong><span>Verified sum: {selectedTeam.filteredEvents.reduce((sum, event) => sum + event.points, 0)} pts</span></div>
              <div className="breakdown-event-grid">{selectedTeam.filteredEvents.map((event) => (
                <article key={event.name}>
                  <div><span>{event.stage.replace('_', ' ')} · {event.placement}</span><strong>{event.name}</strong></div>
                  <strong className="breakdown-event-score">{event.points}<small>/{event.max}</small></strong>
                  <div className="breakdown-track"><i style={{ width: `${Math.round(event.points / event.max * 100)}%` }} /></div>
                </article>
              ))}</div>
            </div>
            <aside className="breakdown-leaders">
              <div><strong>Team leaders &amp; roles</strong>{selectedTeam.leaderDetails.map((leader) => (
                <article key={leader.id}><span><b>{leader.name}</b><small>{leader.role}</small></span><code>{leader.id}</code></article>
              ))}</div>
              <div className="contingent-note"><strong>Contingent highlights</strong><p>{selectedTeam.rosterNote}</p></div>
            </aside>
          </div>
        </div>
      )}
    </section>
  )
}

const gallerySampleArtwork = {
  programme: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"><rect width="800" height="1000" fill="#4e5732"/><circle cx="640" cy="180" r="140" fill="#e2a83e" fill-opacity=".22"/><circle cx="160" cy="780" r="220" fill="#fdfbf7" fill-opacity=".06"/><rect x="90" y="130" width="620" height="740" rx="24" fill="none" stroke="#fdfbf7" stroke-opacity=".25" stroke-width="2"/><line x1="140" y1="260" x2="460" y2="260" stroke="#e2a83e" stroke-width="8" stroke-linecap="round"/><line x1="140" y1="310" x2="620" y2="310" stroke="#fdfbf7" stroke-opacity=".4" stroke-width="4" stroke-linecap="round"/><line x1="140" y1="345" x2="540" y2="345" stroke="#fdfbf7" stroke-opacity=".3" stroke-width="4" stroke-linecap="round"/><rect x="140" y="420" width="520" height="90" rx="14" fill="#fdfbf7" fill-opacity=".09"/><rect x="140" y="535" width="520" height="90" rx="14" fill="#fdfbf7" fill-opacity=".09"/><rect x="140" y="650" width="520" height="90" rx="14" fill="#fdfbf7" fill-opacity=".09"/></svg>`,
  teams: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#b96550"/><circle cx="210" cy="240" r="95" fill="#f6f1e3" fill-opacity=".18"/><circle cx="340" cy="240" r="95" fill="#e2a83e" fill-opacity=".25"/><circle cx="470" cy="240" r="95" fill="#5d673d" fill-opacity=".32"/><circle cx="600" cy="240" r="95" fill="#fdfbf7" fill-opacity=".16"/><rect x="80" y="75" width="640" height="350" rx="20" fill="none" stroke="#fdfbf7" stroke-opacity=".25" stroke-width="2"/></svg>`,
  cultural: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#b88e38"/><path d="M0 390 Q200 260 400 370 T800 330 L800 500 L0 500Z" fill="#5d673d" fill-opacity=".35"/><circle cx="580" cy="145" r="78" fill="#fdfbf7" fill-opacity=".24"/><path d="M150 360L250 180L350 360Z" fill="#ce7c68" fill-opacity=".45"/><path d="M270 360L390 150L510 360Z" fill="#43483b" fill-opacity=".35"/></svg>`,
  moment: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 500"><rect width="1200" height="500" fill="#363b2f"/><polygon points="180,500 440,90 700,500" fill="#e2a83e" fill-opacity=".14"/><polygon points="540,500 820,60 1100,500" fill="#ce7c68" fill-opacity=".14"/><circle cx="820" cy="140" r="64" fill="#fdfbf7" fill-opacity=".14"/><rect x="70" y="65" width="1060" height="370" rx="22" fill="none" stroke="#fdfbf7" stroke-opacity=".2" stroke-width="2"/></svg>`,
}

const gallerySlotBlueprints = [
  {
    id: 'slot-01', index: '01', title: 'Event programme', placeholderSubtitle: 'Programme placeholder',
    archiveSubtitle: 'Official 3-Day Schedule Poster · Print Edition', category: 'Programme', color: '#5d673d',
    spec: 'A4 · PRINT READY', dimensions: '2480 × 3508 px', aspect: '1 : 1.41 (Portrait)',
    track: 'Stage 01 – 03 Master', artwork: 'programme', gridClass: 'gallery-tile--01',
  },
  {
    id: 'slot-02', index: '02', title: 'Team showcase', placeholderSubtitle: 'Team poster placeholder',
    archiveSubtitle: '4 Contingent Identity Posters · Finalist Roster', category: 'Teams', color: '#ce7c68',
    spec: '16:10 · POSTER', dimensions: '1920 × 1200 px', aspect: '16 : 10 (Landscape)',
    track: 'All 4 Contingents', artwork: 'teams', gridClass: 'gallery-tile--02',
  },
  {
    id: 'slot-03', index: '03', title: 'Cultural activity', placeholderSubtitle: 'Media placeholder',
    archiveSubtitle: 'Evening Folk & Political Theatre Showcase', category: 'Moments', color: '#cfa44a',
    spec: '16:10 · MEDIA', dimensions: '1920 × 1200 px', aspect: '16 : 10 (Landscape)',
    track: 'Central Court Stage', artwork: 'cultural', gridClass: 'gallery-tile--03',
  },
  {
    id: 'slot-04', index: '04', title: 'Festival moment', placeholderSubtitle: 'Official upload pending',
    archiveSubtitle: 'Main Auditorium Plenary & Debate Floor Highlights', category: 'Moments', color: '#43483b',
    spec: '21:9 · PANORAMA', dimensions: '2560 × 1080 px', aspect: '21 : 9 (Wide Banner)',
    track: 'Main Auditorium', artwork: 'moment', gridClass: 'gallery-tile--04',
  },
]

function Gallery() {
  const [gallerySlots, setGallerySlots] = useState(() => gallerySlotBlueprints.map((slot) => ({
    ...slot, uploadedImage: '', uploadedFileName: '', status: 'PLACEHOLDER',
  })))
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [placeholderMode, setPlaceholderMode] = useState(true)
  const [selectedSlotId, setSelectedSlotId] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [toast, setToast] = useState('')
  const fileInputRef = useRef(null)
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)
  const toastTimerRef = useRef(null)
  const uploadedUrlsRef = useRef(new Set())
  const uploadRequestRef = useRef(0)

  const selectedSlot = gallerySlots.find((slot) => slot.id === selectedSlotId)
  const publishedCount = gallerySlots.filter((slot) => slot.uploadedImage || slot.status === 'VERIFIED').length
  const categories = [
    { id: 'ALL', label: `All Slots (${String(gallerySlots.length).padStart(2, '0')})` },
    { id: 'Programme', label: 'Programme' },
    { id: 'Teams', label: 'Teams' },
    { id: 'Moments', label: 'Moments' },
  ]
  const visibleSlots = activeCategory === 'ALL'
    ? gallerySlots
    : gallerySlots.filter((slot) => slot.category === activeCategory)

  function showToast(message) {
    setToast(message)
    window.clearTimeout(toastTimerRef.current)
    toastTimerRef.current = window.setTimeout(() => setToast(''), 2600)
  }

  function getDisplay(slot) {
    if (slot.uploadedImage) {
      return { image: slot.uploadedImage, subtitle: slot.uploadedFileName, badge: 'VERIFIED' }
    }
    if (!placeholderMode) {
      return {
        image: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(gallerySampleArtwork[slot.artwork])}`,
        subtitle: slot.archiveSubtitle,
        badge: slot.status === 'VERIFIED' ? 'VERIFIED' : 'SAMPLE PREVIEW',
      }
    }
    return {
      image: '',
      subtitle: slot.status === 'VERIFIED' ? 'Marked verified · media upload pending' : slot.placeholderSubtitle,
      badge: slot.status === 'VERIFIED' ? 'VERIFIED' : slot.spec,
    }
  }

  function openInspector(slotId) {
    previousFocusRef.current = document.activeElement
    setSelectedSlotId(slotId)
  }

  function closeInspector() {
    uploadRequestRef.current += 1
    setSelectedSlotId(null)
    setDragActive(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function handleImageFile(file) {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      showToast('Choose a valid image file to preview in this slot.')
      return
    }
    if (!selectedSlot) {
      showToast('Open an archive slot before adding media.')
      return
    }

    const imageUrl = URL.createObjectURL(file)
    const requestId = ++uploadRequestRef.current
    const image = new Image()
    image.onload = () => {
      if (requestId !== uploadRequestRef.current) {
        URL.revokeObjectURL(imageUrl)
        return
      }
      if (selectedSlot.uploadedImage) {
        URL.revokeObjectURL(selectedSlot.uploadedImage)
        uploadedUrlsRef.current.delete(selectedSlot.uploadedImage)
      }
      uploadedUrlsRef.current.add(imageUrl)
      setGallerySlots((slots) => slots.map((slot) => slot.id === selectedSlot.id
        ? { ...slot, uploadedImage: imageUrl, uploadedFileName: `${file.name} · ${Math.max(1, Math.round(file.size / 1024))} KB`, status: 'VERIFIED' }
        : slot))
      showToast(`Preview added to archive slot ${selectedSlot.index}.`)
    }
    image.onerror = () => {
      URL.revokeObjectURL(imageUrl)
      if (requestId !== uploadRequestRef.current) return
      showToast('This image could not be opened. Try a PNG, JPG, or WebP file.')
    }
    image.src = imageUrl
  }

  function resetGallery() {
    uploadRequestRef.current += 1
    uploadedUrlsRef.current.forEach((url) => URL.revokeObjectURL(url))
    uploadedUrlsRef.current.clear()
    setGallerySlots(gallerySlotBlueprints.map((slot) => ({ ...slot, uploadedImage: '', uploadedFileName: '', status: 'PLACEHOLDER' })))
    setPlaceholderMode(true)
    setActiveCategory('ALL')
    showToast('Gallery restored to placeholder mode.')
  }

  useEffect(() => () => {
    window.clearTimeout(toastTimerRef.current)
    uploadedUrlsRef.current.forEach((url) => URL.revokeObjectURL(url))
  }, [])

  useEffect(() => {
    if (!selectedSlotId) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    function handleKeyDown(event) {
      if (event.key === 'Escape') closeInspector()
      if (event.key === 'Tab') {
        const dialog = document.querySelector('.gallery-inspector')
        const focusable = dialog?.querySelectorAll('button:not(:disabled), select, input:not([type="file"])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFocusRef.current?.focus?.()
    }
  }, [selectedSlotId])

  function markStatus(status) {
    if (!selectedSlot) return
    setGallerySlots((slots) => slots.map((slot) => slot.id === selectedSlot.id ? { ...slot, status } : slot))
    showToast(`Slot ${selectedSlot.index} marked ${status === 'VERIFIED' ? 'verified' : 'placeholder'}.`)
  }

  function clearSlotUpload() {
    if (!selectedSlot) return
    uploadRequestRef.current += 1
    if (selectedSlot.uploadedImage) {
      URL.revokeObjectURL(selectedSlot.uploadedImage)
      uploadedUrlsRef.current.delete(selectedSlot.uploadedImage)
    }
    setGallerySlots((slots) => slots.map((slot) => slot.id === selectedSlot.id
      ? { ...slot, uploadedImage: '', uploadedFileName: '', status: 'PLACEHOLDER' }
      : slot))
    showToast(`Slot ${selectedSlot.index} reverted to placeholder.`)
  }

  function uploadNextSlot() {
    const nextSlot = gallerySlots.find((slot) => !slot.uploadedImage && slot.status !== 'VERIFIED') ?? gallerySlots[0]
    openInspector(nextSlot.id)
  }

  return (
    <section className="section gallery-section" id="gallery" aria-labelledby="gallery-heading">
      <div className="gallery-shell">
        <header className="gallery-header">
          <div className="gallery-heading-copy">
            <p className="section-kicker">Festival archive</p>
            <h2 id="gallery-heading">Gallery</h2>
            <p>Curated visual repository for official programmes, team posters, cultural showcases, and stage documentation.</p>
          </div>
          <div className="gallery-controls">
            <div className="gallery-filter" role="group" aria-label="Filter gallery archive slots">
              {categories.map((category) => (
                <button type="button" key={category.id} aria-pressed={activeCategory === category.id} className={activeCategory === category.id ? 'active' : ''} onClick={() => setActiveCategory(category.id)}>
                  {category.label}
                </button>
              ))}
            </div>
            <button type="button" className="gallery-upload-button" onClick={uploadNextSlot}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
              Upload Asset
            </button>
            <div className="gallery-mode-wrap">
              <button type="button" className="gallery-mode-pill" aria-pressed={placeholderMode} onClick={() => { setPlaceholderMode((mode) => !mode); showToast(placeholderMode ? 'Previewing sample archive artwork.' : 'Switched to placeholder view.') }}>
                <i className={placeholderMode ? '' : 'sample-active'} />
                {placeholderMode ? 'Placeholders' : 'Sample Archive'}
              </button>
              <span role="tooltip">{placeholderMode ? 'Placeholder blueprint mode. Switch to preview sample artwork and uploaded media.' : 'Sample archive preview. Switch back to placeholder blueprint mode.'}</span>
            </div>
          </div>
        </header>

        <div className={`gallery-grid gallery-grid--${activeCategory === 'ALL' ? 'all' : 'filtered'}`}>
          {visibleSlots.map((slot, index) => {
            const display = getDisplay(slot)
            return (
              <button
                type="button"
                key={`${activeCategory}-${slot.id}`}
                className={`gallery-tile ${slot.gridClass} ${display.image ? 'has-artwork' : ''}`}
                style={{ '--tile-color': slot.color, '--tile-delay': `${index * 70}ms` }}
                aria-label={`Inspect ${slot.title}, slot ${slot.index}`}
                onClick={() => openInspector(slot.id)}
              >
                {display.image && <img className="gallery-tile-image" src={display.image} alt="" />}
                {display.image && <span className="gallery-image-shade" />}
                <span className="gallery-tile-top">
                  <span className="gallery-index">{slot.index}</span>
                  <span className="gallery-tile-actions">Inspect <i>·</i> Upload</span>
                  <span className="gallery-spec-pill">{display.badge}</span>
                </span>
                <span className="gallery-tile-copy">
                  <strong>{slot.title}</strong>
                  <small>{display.subtitle}</small>
                </span>
                <span className="gallery-quarter-arc" aria-hidden="true" />
                <span className="gallery-tile-arrow" aria-hidden="true">↗</span>
              </button>
            )
          })}
        </div>

        <footer className="gallery-telemetry">
          <span className="gallery-telemetry-status"><i className={publishedCount ? 'is-published' : ''} />{gallerySlots.length} Archive Slots · {publishedCount}/{gallerySlots.length} Published · {placeholderMode ? 'POLARTS 2026 Media Repository' : 'Sample Archive Preview Active'}</span>
          <div><small>Click any tile to inspect specifications or add media</small>{(publishedCount > 0 || !placeholderMode || activeCategory !== 'ALL') && <button type="button" onClick={resetGallery}>Reset to Placeholders</button>}</div>
        </footer>
      </div>

      {selectedSlot && (
        <div className="gallery-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeInspector() }}>
          <section className="gallery-inspector" role="dialog" aria-modal="true" aria-labelledby="gallery-inspector-title">
            <header className="gallery-inspector-header">
              <div className="gallery-inspector-title">
                <span className="gallery-inspector-index" style={{ backgroundColor: selectedSlot.color }}>{selectedSlot.index}</span>
                <div><small>{selectedSlot.spec} <i>·</i> {selectedSlot.category}</small><h3 id="gallery-inspector-title">{selectedSlot.title}</h3></div>
              </div>
              <button ref={closeButtonRef} type="button" aria-label="Close asset inspector" onClick={closeInspector}>×</button>
            </header>
            <div className="gallery-inspector-body">
              <div className={`gallery-preview-stage ${getDisplay(selectedSlot).image ? 'has-artwork' : ''}`} style={{ '--tile-color': selectedSlot.color }}>
                {getDisplay(selectedSlot).image && <img src={getDisplay(selectedSlot).image} alt={`${selectedSlot.title} preview`} />}
                {getDisplay(selectedSlot).image && <span className="gallery-image-shade" />}
                <span className="gallery-preview-meta"><b>{selectedSlot.index}</b><small>{selectedSlot.uploadedImage || selectedSlot.status === 'VERIFIED' ? 'Verified Upload' : 'Placeholder'}</small></span>
                <span className="gallery-preview-copy"><strong>{selectedSlot.title}</strong><small>{getDisplay(selectedSlot).subtitle}</small></span>
                <span className="gallery-quarter-arc" aria-hidden="true" />
              </div>
              <input ref={fileInputRef} className="sr-only" type="file" tabIndex={-1} accept="image/png,image/jpeg,image/webp,image/gif" aria-label="Choose image for this archive slot" onChange={(event) => { handleImageFile(event.target.files?.[0]); event.target.value = '' }} />
              <button type="button" className={`gallery-dropzone ${dragActive ? 'is-dragging' : ''}`} onClick={() => fileInputRef.current?.click()} onDragOver={(event) => { event.preventDefault(); setDragActive(true) }} onDragLeave={() => setDragActive(false)} onDrop={(event) => { event.preventDefault(); setDragActive(false); handleImageFile(event.dataTransfer.files?.[0]) }}>
                <span className="gallery-drop-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4m0 0L7 9m5-5 5 5M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg></span>
                <strong>Drop an image here or <u>browse files</u></strong>
                <small>PNG, JPG, WebP, or GIF · Local preview only; not uploaded to a server</small>
              </button>
              <div className="gallery-metadata">
                <div><small>Dimensions</small><strong>{selectedSlot.dimensions}</strong></div>
                <div><small>Aspect Ratio</small><strong>{selectedSlot.aspect}</strong></div>
                <div><small>Assigned Track</small><strong>{selectedSlot.track}</strong></div>
                <label><small>Slot Status</small><select value={selectedSlot.uploadedImage ? 'VERIFIED' : selectedSlot.status} onChange={(event) => markStatus(event.target.value)}><option value="PLACEHOLDER">Placeholder</option><option value="VERIFIED">Verified Upload</option></select></label>
              </div>
            </div>
            <footer className="gallery-inspector-footer">
              <button type="button" className="gallery-revert-button" onClick={clearSlotUpload}>Revert slot to placeholder</button>
              <button type="button" className="gallery-done-button" onClick={closeInspector}>Done</button>
            </footer>
          </section>
        </div>
      )}
      {toast && <div className="gallery-toast" role="status" aria-live="polite"><i />{toast}</div>}
    </section>
  )
}

function Participation() {
  const [couponView, setCouponView] = useState('artwork')
  const [couponImage, setCouponImage] = useState('')
  const [couponImageName, setCouponImageName] = useState('')
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [formUrl, setFormUrl] = useState('')
  const [draftFormUrl, setDraftFormUrl] = useState(formUrl)
  const [formFeedback, setFormFeedback] = useState('')
  const [toast, setToast] = useState('')
  const uploadInputRef = useRef(null)
  const formCloseRef = useRef(null)
  const previousFormFocusRef = useRef(null)
  const toastTimerRef = useRef(null)
  const couponImageRef = useRef('')

  function showToast(message) {
    setToast(message)
    window.clearTimeout(toastTimerRef.current)
    toastTimerRef.current = window.setTimeout(() => setToast(''), 2600)
  }

  function openFormModal() {
    previousFormFocusRef.current = document.activeElement
    setDraftFormUrl(formUrl)
    setFormFeedback('')
    setFormModalOpen(true)
  }

  function closeFormModal() {
    setFormModalOpen(false)
  }

  function saveFormUrl() {
    try {
      const parsedUrl = new URL(draftFormUrl.trim())
      if (!['https:', 'http:'].includes(parsedUrl.protocol)) throw new Error('Unsupported URL protocol')
      setFormUrl(parsedUrl.href)
      setDraftFormUrl(parsedUrl.href)
      setFormFeedback('Google Form link saved for this browser session.')
      showToast('Google Form link updated.')
    } catch {
      setFormFeedback('Enter a valid http or https Google Form URL.')
    }
  }

  async function copyBatchId() {
    try {
      await navigator.clipboard.writeText('POL01st IR')
      showToast('Batch ID “POL01st IR” copied.')
    } catch {
      showToast('Clipboard access is unavailable. Batch ID: POL01st IR')
    }
  }

  function handleCouponFile(file) {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      showToast('Choose a valid image file for the coupon preview.')
      return
    }
    const imageUrl = URL.createObjectURL(file)
    const image = new Image()
    image.onload = () => {
      if (couponImageRef.current) URL.revokeObjectURL(couponImageRef.current)
      couponImageRef.current = imageUrl
      setCouponImage(imageUrl)
      setCouponImageName(file.name)
      setCouponView('upload')
      showToast('Coupon artwork loaded as a local preview.')
    }
    image.onerror = () => {
      URL.revokeObjectURL(imageUrl)
      showToast('This image could not be opened. Try a PNG, JPG, or WebP file.')
    }
    image.src = imageUrl
  }

  function clearCouponImage() {
    if (couponImageRef.current) URL.revokeObjectURL(couponImageRef.current)
    couponImageRef.current = ''
    setCouponImage('')
    setCouponImageName('')
    if (uploadInputRef.current) uploadInputRef.current.value = ''
    showToast('Custom coupon preview cleared.')
  }

  useEffect(() => () => {
    window.clearTimeout(toastTimerRef.current)
    if (couponImageRef.current) URL.revokeObjectURL(couponImageRef.current)
  }, [])

  useEffect(() => {
    if (!formModalOpen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    formCloseRef.current?.focus()
    function handleKeyDown(event) {
      if (event.key === 'Escape') closeFormModal()
      if (event.key === 'Tab') {
        const dialog = document.querySelector('.coupon-form-dialog')
        const focusable = dialog?.querySelectorAll('button:not(:disabled),input,a[href]')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFormFocusRef.current?.focus?.()
    }
  }, [formModalOpen])

  return (
    <section className="participation-section" id="participate" aria-labelledby="participation-title">
      <div className="coupon-feature">
        <div className="coupon-copy">
          <div className="coupon-edition-pill"><i />POLARTS · NOV 26 &amp; 27</div>
          <h2 id="participation-title">Claim your official POLARTS participation coupon.</h2>
          <p>Register your details through the official form to secure your festival participation pass and enter the <strong>Ultimate POLARTS Lucky Draw</strong> hosted by the Department of Political Science.</p>
          <div className="coupon-perks">
            <article><small>Prize Pool</small><strong>₹5,000+</strong><span>Exciting rewards</span></article>
            <article><small>Coupon Entry</small><strong>₹20 /-</strong><span>Batch POL01st IR</span></article>
            <article><small>Lucky Draw</small><strong>Nov 27</strong><span>Live announcement</span></article>
          </div>
          <div className="coupon-actions">
            <button type="button" className="coupon-register-button" onClick={openFormModal}>Register via Google Form <span aria-hidden="true">↗</span></button>
            <button type="button" className="coupon-copy-button" onClick={copyBatchId}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2"/></svg>
              Copy Batch ID: POL01st IR
            </button>
          </div>
          <div className="coupon-status"><span><b>✓</b> Registration link configurable</span><i>·</i><button type="button" onClick={openFormModal}>Configure Google Form URL</button></div>
          <small className="coupon-demo-note">Demo interface · Form destination must be configured by the organizer.</small>
        </div>
        <div className="coupon-showcase">
          <div className="coupon-showcase-top">
            <span className="coupon-official-badge"><i />Official Lucky Draw Pass</span>
            <div className="coupon-view-toggle" role="group" aria-label="Coupon display mode">
              <button type="button" className={couponView === 'artwork' ? 'active' : ''} aria-pressed={couponView === 'artwork'} onClick={() => setCouponView('artwork')}>Coupon Preview</button>
              <button type="button" className={couponView === 'upload' ? 'active' : ''} aria-pressed={couponView === 'upload'} onClick={() => setCouponView('upload')}>Upload Slot</button>
            </div>
          </div>
          {couponView === 'artwork' ? (
            <div className="coupon-stage">
              <img className="coupon-artwork-image" src={`${import.meta.env.BASE_URL}logo/polarts-coupon.jpg`} alt="Official POLARTS participation and lucky draw coupon, including the ₹20 entry, November 26–27 event dates, and ₹5,000 prize information." />
            </div>
          ) : (
            <div className={`coupon-upload-slot ${couponImage ? 'has-image' : ''}`}>
              {couponImage ? (
                <div className="coupon-upload-preview">
                  <img src={couponImage} alt="Uploaded POLARTS coupon artwork preview"/>
                  <div><strong>{couponImageName}</strong><button type="button" onClick={() => uploadInputRef.current?.click()}>Change Image</button><button type="button" onClick={clearCouponImage}>Clear</button></div>
                </div>
              ) : (
                <button type="button" className="coupon-upload-prompt" onClick={() => uploadInputRef.current?.click()}>
                  <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4m0 0L7 9m5-5 5 5M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg></span>
                  <strong>Upload Custom Coupon Artwork</strong>
                  <small>Click to preview your JPG, PNG, or WebP artwork inside the ticket frame.</small>
                </button>
              )}
              <input ref={uploadInputRef} className="sr-only" type="file" accept="image/png,image/jpeg,image/webp,image/gif" tabIndex={-1} aria-label="Choose custom coupon artwork" onChange={(event) => { handleCouponFile(event.target.files?.[0]); event.target.value = '' }}/>
            </div>
          )}
          <div className="coupon-caption"><span>Batch ID: <b>POL01st IR</b></span><span>Department of Political Science</span></div>
        </div>
      </div>
      {formModalOpen && (
        <div className="coupon-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) closeFormModal() }}>
          <section className="coupon-form-dialog" role="dialog" aria-modal="true" aria-labelledby="coupon-form-title">
            <header><div><span>POLARTS Registration Portal</span><h3 id="coupon-form-title">Google Form Integration</h3></div><button ref={formCloseRef} type="button" aria-label="Close registration setup" onClick={closeFormModal}>×</button></header>
            <p>Configure the organizer’s Google Form link below. Registration is not connected until a real form URL is supplied.</p>
            <label htmlFor="coupon-form-url">Target Google Form URL</label>
            <input id="coupon-form-url" type="url" value={draftFormUrl} onChange={(event) => { setDraftFormUrl(event.target.value); setFormFeedback('') }} placeholder="https://docs.google.com/forms/..." />
            {formFeedback && <div className={`coupon-form-feedback ${formFeedback.startsWith('Enter') ? 'is-error' : ''}`} role="status">{formFeedback}</div>}
            <footer><button type="button" onClick={saveFormUrl}>Save Link</button>{formUrl ? <a href={formUrl} target="_blank" rel="noopener noreferrer">Proceed to Google Form <span aria-hidden="true">↗</span></a> : <button type="button" disabled title="Configure a real Google Form link first">Configure a form link to continue</button>}</footer>
          </section>
        </div>
      )}
      {toast && <div className="coupon-toast" role="status" aria-live="polite"><i/>{toast}</div>}
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer"><div className="footer-main"><Brand compact /><p>Department of Political Science<br />POLARTS Cultural Festival</p><nav aria-label="Footer navigation">{footerNavigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="footer-edition"><small>Current edition</small><strong>POLARTS · 2026</strong></div></div><div className="footer-bottom"><span>© 2026 POLARTS</span><span>Built for the Department of Political Science</span></div></footer>
  )
}

function ModalLayer({ activeModal, onClose }) {
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)
  const directoryResults = participants.filter((person) => {
    const term = query.trim().toLowerCase()
    return !term || person.name.toLowerCase().includes(term) ||
      person.chessNumber.toLowerCase().includes(term) || person.event.toLowerCase().includes(term)
  })

  useEffect(() => {
    if (activeModal === 'directory') {
      window.setTimeout(() => searchRef.current?.focus(), 30)
    }
  }, [activeModal])

  if (!activeModal) return null

  const title = activeModal === 'leaderboard'
    ? 'POLARTS 2026 · Team standings'
    : activeModal === 'events'
      ? 'Preliminary rounds · Active queue'
      : 'Quick participant lookup'

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className={`site-modal site-modal--${activeModal}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header className="site-modal-header">
          <div>
            <span>{activeModal === 'leaderboard' ? 'Illustrative standings' : activeModal === 'events' ? 'Stage 02 schedule' : 'Participant directory'}</span>
            <h2 id="modal-title">{title}</h2>
          </div>
          <button type="button" className="modal-close" aria-label="Close dialog" onClick={onClose}>×</button>
        </header>
        {activeModal === 'directory' && (
          <>
            <div className="modal-search">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 4.5 4.5"/></svg>
              <input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search participant by name, event, or chess number..." />
              <kbd>ESC</kbd>
            </div>
            <div className="modal-results">
              {directoryResults.map((person) => (
                <article key={`${person.chessNumber}-${person.event}`}>
                  <div><strong>{person.name}</strong><span>{person.event}</span></div>
                  <code>{person.chessNumber}</code>
                </article>
              ))}
              {!directoryResults.length && <p className="modal-empty">No matching participant records found.</p>}
            </div>
          </>
        )}
        {activeModal === 'events' && (
          <div className="modal-results">
            {festivalStages[1].events.map((event) => (
              <article key={event.id}>
                <time>{event.time}</time><div><span className={`modal-event-status modal-event-status--${event.status.toLowerCase()}`}>{event.status}</span><strong>{event.title}</strong></div><span>{event.venue}</span>
              </article>
            ))}
          </div>
        )}
        {activeModal === 'leaderboard' && (
          <div className="modal-results">
            {teamStandings.map((team) => (
              <article key={team.name}>
                <b className="modal-rank">{String(team.rank).padStart(2, '0')}</b>
                <div><strong>{team.name}</strong><span>{team.leaders.join(' · ')}</span></div>
                <code>{team.points} pts</code>
              </article>
            ))}
          </div>
        )}
        <footer className="site-modal-footer">
          <span>Demonstration data · Not connected to live results</span>
          <button type="button" onClick={onClose}>Done</button>
        </footer>
      </section>
    </div>
  )
}

function App() {
  const [activeModal, setActiveModal] = useState(null)
  const [heroStageIndex, setHeroStageIndex] = useState(1)

  useEffect(() => {
    function handleKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setActiveModal('directory')
      } else if (event.key === 'Escape') {
        setActiveModal(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <Header onOpenModal={setActiveModal} stageIndex={heroStageIndex} />
      <main>
        <Hero onOpenModal={setActiveModal} stageIndex={heroStageIndex} setStageIndex={setHeroStageIndex} />
        <ParticipantSearch /><Leaderboard /><Events /><Teams /><Gallery /><Participation />
      </main>
      <Footer />
      <ModalLayer key={activeModal || 'closed'} activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </>
  )
}

export default App
