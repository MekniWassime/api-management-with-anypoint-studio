--
-- PostgreSQL database dump
--
-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Debian 15.1-1.pgdg110+1)
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;
SET default_tablespace = '';
SET default_table_access_method = heap;
--
-- Name: pet; Type: TABLE; Schema: public; Owner: petshopuser
--
CREATE TABLE public.pet (
    id integer NOT NULL,
    "Name" character varying NOT NULL,
    "FamilyName" character varying NOT NULL,
    "Salary" integer NOT NULL
);
ALTER TABLE public.pet OWNER TO petshopuser;
--
-- Name: pet_id_seq; Type: SEQUENCE; Schema: public; Owner: petshopuser
--
CREATE SEQUENCE public.pet_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER TABLE public.pet_id_seq OWNER TO petshopuser;
--
-- Name: pet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: petshopuser
--
ALTER SEQUENCE public.pet_id_seq OWNED BY public.pet.id;
--
-- Name: pet id; Type: DEFAULT; Schema: public; Owner: petshopuser
--
ALTER TABLE ONLY public.pet
ALTER COLUMN id
SET DEFAULT nextval('public.pet_id_seq'::regclass);
--
-- Data for Name: pet; Type: TABLE DATA; Schema: public; Owner: petshopuser
--
COPY public.pet (id, "Name", "FamilyName", "Salary")
FROM stdin;
2 wassime mekni 3000 \.--
-- Name: pet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: petshopuser
--
SELECT pg_catalog.setval('public.pet_id_seq', 2, true);
--
-- Name: pet PK_b1ac2e88e89b9480e0c5b53fa60; Type: CONSTRAINT; Schema: public; Owner: petshopuser
--
ALTER TABLE ONLY public.pet
ADD CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY (id);
--
-- PostgreSQL database dump complete
- -