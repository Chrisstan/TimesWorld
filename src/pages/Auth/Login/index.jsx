import React from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';

import GoogleImg from "../../../assets/images/Google.png";
import ImageRight from "../../../assets/images/imgRight.png";
import FacebookImg from "../../../assets/images/facebook.png";

const loginValidationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username or email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
});

const Index = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(loginValidationSchema),
    });

    const onSubmit = (data) => {
        navigate('/dashboard'); 
    };

    return (
        <div className="loginContainer">
            <div className="loginContainer__loginCard">
                <h1 className='loginContainer__header'>Sign In</h1>
                <p className='loginContainer__subTitle'>
                    New user?{' '}
                    <a href="/register" className="loginContainer__link">
                        Create an account
                    </a>
                </p>
                <Form className="loginContainer__form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formUsername" className="mb-3">
                        <Form.Control
                            type="text" 
                            placeholder="Username or email"
                            className="loginContainer__input"
                            {...register('username')} isInvalid={errors.username}
                        />
                        {errors.username &&
                            <span className={`error ${errors.username && 'visible'}`}>{errors?.username?.message}</span>
                        }
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            className="loginContainer__input"
                            {...register('password')} isInvalid={!!errors.password}
                        />
                        {errors.password &&
                            <span className={`error ${errors.password && 'visible'}`}>{errors?.password?.message}</span>
                        }
                    </Form.Group>
                    <Form.Group controlId="formCheckbox" className="mb-3 loginContainer__checkbox">
                        <Form.Check className='loginContainer__checkInput' {...register('rememberMe')}
                            type="checkbox" label="Keep me signed in" 
                        />
                    </Form.Group>
                    <Button type='submit' className="loginContainer__button w-100">
                        Sign In
                    </Button>
                </Form>
                <p className='loginContainer__baseText'>Or Sign In With</p>
                <div className="loginContainer__socialIcons">
                    <img src={GoogleImg} alt="" className='socialIcon'/>
                    <img src={FacebookImg} alt="" className='socialIcon'/>
                    <img src={FacebookImg} alt="" className='socialIcon'/>
                    <img src={FacebookImg} alt="" className='socialIcon'/>
                </div>
            </div>
            <img src={ImageRight} alt="login" className="loginContainer__image" />
        </div>
    );
};

export default Index;