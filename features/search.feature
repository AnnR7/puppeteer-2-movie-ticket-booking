Feature: Movie-ticket booking
    Scenario: One ticket happy test 
        Given user on page
        When user selects date
        When user selects time
        When user selects place
        When user booking ticket
        Then user sees button 'Получить код подтверждения'

    Scenario: Two vip ticket happy test
        Given user on page
        When user selects date
        When user selects time
        When user selects first vip place
        When user selects second vip place
        When user booking ticket
        Then user sees button 'Получить код подтверждения'

    Scenario: Two ticket sad test
        Given user on page
        When user selects date
        When user selects time 
        When user selects first busy place
        When user selects second busy place 
        Then user sees text 'Выберите билет'
        