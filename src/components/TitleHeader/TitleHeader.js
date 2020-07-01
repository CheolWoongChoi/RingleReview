import React from 'react';
import moment from 'moment';
import './TitleHeader.scss';

const TitleHeader = () => {
	return (
		<div className='title-header'>
			<div className='title'>
				<span className='text'>
					What are you getting into it? – Notes from a start-up founder: Immersion and concentration
				</span>
				<span className='date'>
					<img src='https://ringleimageassets.s3.ap-northeast-2.amazonaws.com/common/icon/ic-calendar.png' alt='date' />
					<span className='date-text'>{moment().format('LLLL')}</span>
				</span>
			</div>
		</div>
	)
};

export default TitleHeader;