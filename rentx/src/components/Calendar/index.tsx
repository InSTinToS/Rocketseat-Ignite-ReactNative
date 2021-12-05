import React from 'react'
import { ViewStyle } from 'react-native'

import { Feather } from '@expo/vector-icons'
import {
  Calendar as NativeCalendar,
  CalendarProps as NativeCalendarProps,
  LocaleConfig
} from 'react-native-calendars'
import { Direction, Theme } from 'react-native-calendars/src/types'
import { useTheme } from 'styled-components'

interface CalendarProps extends NativeCalendarProps {}

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
  today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br'

const Calendar = ({ ...props }: CalendarProps) => {
  const theme = useTheme()

  const headerStyle: ViewStyle = {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,

    borderBottomColor: theme.colors.text_detail,
    backgroundColor: theme.colors.background_secondary
  }

  const calendarTheme: Theme = {
    textDayHeaderFontSize: 10,
    textDayFontFamily: theme.fonts.primary_400,
    textDayHeaderFontFamily: theme.fonts.primary_500,

    textMonthFontSize: 20,
    monthTextColor: theme.colors.title,
    textMonthFontFamily: theme.fonts.secondary_500,

    arrowStyle: { marginHorizontal: -15 }
  }

  const renderArrow = (direction: Direction) => (
    <Feather
      size={24}
      color={theme.colors.text}
      name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
    />
  )

  return (
    <NativeCalendar
      firstDay={1}
      theme={calendarTheme}
      renderArrow={renderArrow}
      headerStyle={headerStyle}
      minDate={new Date()}
      {...props}
    />
  )
}

export default Calendar
