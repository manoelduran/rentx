import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Calendar as CustomCalendar, LocaleConfig, DateCallbackHandler } from 'react-native-calendars';
import { useTheme } from 'styled-components';
import {generateInterval} from './generateInterval'
import { ptBr } from './localeConfig';

interface MarkedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disabledTouchEvent?: boolean;
    }
}

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

interface CalendarProps {
    markedDates: MarkedDateProps;
    onDayPress: DateCallbackHandler;
}

LocaleConfig.locales['pt-br'] = ptBr;
LocaleConfig.defaultLocale = 'pt-br';
function Calendar({ markedDates, onDayPress }: CalendarProps) {
    const theme = useTheme();
    return (
        <CustomCalendar
            renderArrow={(direction) =>
                <Feather
                    size={24}
                    color={theme.colors.text}
                    name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                />
            }
            headerStyle={{
                backgroundColor: theme.colors.background_secundary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_datails,
                paddingBottom: 5,
                marginBottom: 5,
            }}
            theme={{
                textDayFontFamily: theme.fonts.primary_400,
                textDayHeaderFontFamily: theme.fonts.primary_500,
                textMonthFontFamily: theme.fonts.secundary_600,
                textDayHeaderFontSize: 10,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}
            firstDay={1}
            minDate={new Date()}
            markingType="period"
            markedDates={markedDates}
            onDayPress={onDayPress}
        />
    );
}

export { Calendar, DayProps, MarkedDateProps, generateInterval }