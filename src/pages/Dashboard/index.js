import React, { useState, useEffect } from "react";

import { Container, Meetup } from "./styles";
import { MdAddCircleOutline, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "~/services/api";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get("mymeetups");

      const data = response.data.map(meetup => {
        const datetimeFormatted = format(
          parseISO(meetup.datetime),
          "d 'de' MMMM, 'às' HH'h'",
          {
            locale: pt
          }
        );
        return {
          ...meetup,
          datetimeFormatted
        };
      });

      setMeetups(data);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/meetup/new">
          <button type="button" onClick={() => {}}>
            <span>
              <MdAddCircleOutline size={20} color="#fff" />
              Novo meetup
            </span>
          </button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup past key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.datetimeFormatted}</span>
              <Link to={`/meetup/${meetup.id}`}>
                <button type="button">
                  <MdChevronRight size={24} color="#fff" />
                </button>
              </Link>
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}