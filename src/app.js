import ReactDOM from 'react-dom'
import React from 'react'

import Page1 from './components/Page1'
import Page9 from './components/Page9'
import Page15 from './components/Page15'
import { Card } from './components/card'
import { SmallCard } from './components/card'

import 'normalize.css/normalize.css'
import './styles/style.scss'

ReactDOM.render(<Page15 />, document.getElementById('app'))