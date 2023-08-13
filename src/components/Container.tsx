import React from 'react'

type ContainerProps = {
    class1: string;
    children: React.ReactNode;
};

const Container = (props : ContainerProps) => {
  return (
    <section className={props.class1}>
        <div className="container-xxl">{props.children}</div>
    </section>
  )
}

export default Container