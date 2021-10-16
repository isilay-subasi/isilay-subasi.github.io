
		function millisecondToDay(millisecond){
			return millisecond / (1000 * 60 * 60 * 24);
		}

		function getPublishedBlogDateText(dateDifference){
			if(dateDifference < 0){
				return `Published ${-dateDifference} days later`;
			}
			else{
				if(dateDifference > 365){
					let yearCount = parseInt(dateDifference / 365);
					let remainedYearDayCount = dateDifference % 365;
					if(remainedYearDayCount > 30){
						let monthCount = parseInt(remainedYearDayCount / 30);
						let remainedMonthDayCount = remainedYearDayCount % 30;
						return `Published ${yearCount} years ${monthCount} months ${remainedMonthDayCount} days ago`;
					}
					else{
						return `Published ${yearCount} years ${remainedYearDayCount} days ago`;
					}
					
				}
				else{
					if(dateDifference > 30){
						let monthCount = parseInt(dateDifference / 30);
						let remainedMonthDayCount = dateDifference % 30;
						return `Published ${monthCount} months ${remainedMonthDayCount} days ago`;
					}
					else{
						return `Published ${dateDifference} days ago`;
					}
				}
			}
		}

		let today = new Date();

		let publishedBlogDateTexts = document.querySelectorAll(".blog-list .container .item .media .media-body .meta .date");

		publishedBlogDateTexts.forEach(publishedBlogDateText => {
			let publishedBlogDate = new Date(publishedBlogDateText.getAttribute("data-publish-date"));
			let dateDifferenceWithMillisecond = today - publishedBlogDate;

			let dateDifference = parseInt(millisecondToDay(dateDifferenceWithMillisecond), 10);

			publishedBlogDateText.textContent = getPublishedBlogDateText(dateDifference);
			
		});